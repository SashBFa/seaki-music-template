import { CollectionConfig } from "payload/types";

export type ConcertsType = {
  date: Date;
  location: string;
  info?: string;
  link: string;
};

const Concerts: CollectionConfig = {
  slug: "Concerts",
  fields: [
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
    },
    {
      name: "location",
      label: "Lieux",
      type: "text",
      required: true,
    },
    {
      name: "info",
      label: "Informations",
      type: "text",
    },
    {
      name: "link",
      label: "Liens Billets",
      type: "text",
      required: true,
    },
  ],
};

export default Concerts;
