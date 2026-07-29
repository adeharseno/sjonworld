import { createHash } from "node:crypto";

import { NextResponse } from "next/server";

import { subscriberSchema } from "@/lib/subscriber";
import { getWriteClient } from "@/sanity/lib/client";
import { SUBSCRIBER_EXISTS_QUERY } from "@/sanity/queries/subscriber";

type ErrorWithStatus = {
  statusCode?: number;
};

function getSubscriberId(email: string) {
  const digest = createHash("sha256").update(email).digest("hex");
  return `subscriber.${digest}`;
}

function hasStatusCode(error: unknown): error is ErrorWithStatus {
  return typeof error === "object" && error !== null && "statusCode" in error;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const result = subscriberSchema.safeParse(payload);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Enter a valid email address.",
        issues: result.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const { email } = result.data;

  try {
    const client = getWriteClient();
    const alreadyExists = await client.fetch<boolean>(SUBSCRIBER_EXISTS_QUERY, {
      email,
    });

    if (alreadyExists) {
      return NextResponse.json(
        { message: "This email is already subscribed." },
        { status: 409 },
      );
    }

    await client.create({
      _id: getSubscriberId(email),
      _type: "subscriber",
      email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Subscription created." },
      { status: 201 },
    );
  } catch (error) {
    // The deterministic ID closes the race between the lookup and create calls.
    if (hasStatusCode(error) && error.statusCode === 409) {
      return NextResponse.json(
        { message: "This email is already subscribed." },
        { status: 409 },
      );
    }

    console.error("Subscriber creation failed", error);

    return NextResponse.json(
      { message: "The subscription service is temporarily unavailable." },
      { status: 503 },
    );
  }
}
