import { CollectionConfig } from "payload/types";

export type MusicType = {
  title: string;
  subtitle: string;
  filename: string;
};

const Music: CollectionConfig = {
  slug: "Music",
  fields: [
    {
      name: "title",
      label: "Titre",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      label: "Sous-titre",
      type: "text",
    },
  ],
  upload: {
    mimeTypes: ["audio/*"],
  },
};
export default Music;
