import { defineQuery } from "next-sanity";

export const SUBSCRIBER_EXISTS_QUERY = defineQuery(/* groq */ `defined(*[
    _type == "subscriber" &&
    lower(email) == $email
  ][0]._id)`);
