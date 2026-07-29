import "server-only";

import { createClient } from "@sanity/client";

import { sanityEnv } from "@/sanity/env";

export function getWriteClient() {
  return createClient({
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
    apiVersion: sanityEnv.apiVersion,
    token: sanityEnv.token,
    useCdn: false,
    perspective: "published",
  });
}
