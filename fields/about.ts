import { Field } from "payload/types";
import { Type as MediaType } from "./../collections/Media";

export type AboutType = {
  aboutMedia: MediaType;
  title?: string;
  description?: string[];
};

const about: Field = {
  name: "about",
  label: "A Propos",
  type: "group",
  fields: [
    {
      name: "aboutMedia",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      label: "Titre",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
    },
  ],
};

export default about;
