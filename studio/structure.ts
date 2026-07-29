import { EnvelopeIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("SJONWORLD")
    .items([
      S.documentTypeListItem("subscriber")
        .title("Subscribers")
        .icon(EnvelopeIcon),
    ]);
