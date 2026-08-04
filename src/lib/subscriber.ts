import { z } from "zod";

export const subscriberSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Enter an email address.")
    .toLowerCase()
    .pipe(z.email("Enter a valid email address.")),
});

export type SubscriberInput = z.infer<typeof subscriberSchema>;
