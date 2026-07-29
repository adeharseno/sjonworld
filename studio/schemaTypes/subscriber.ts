import { EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const subscriber = defineType({
  name: "subscriber",
  title: "Subscriber",
  type: "document",
  icon: EnvelopeIcon,
  readOnly: true,
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .lowercase()
          .email()
          .error("A valid lowercase email address is required."),
    }),
    defineField({
      name: "createdAt",
      title: "Created at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "createdAt",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle
          ? new Intl.DateTimeFormat("en", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(new Date(subtitle))
          : "Unknown date",
        media: EnvelopeIcon,
      };
    },
  },
  orderings: [
    {
      title: "Newest first",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
  ],
});
