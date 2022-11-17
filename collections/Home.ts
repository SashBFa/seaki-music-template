import { CollectionConfig } from "payload/types";
import about, { AboutType } from "../fields/about";
import meta, { Type as MetaType } from "../fields/meta";
import { Type as MediaType } from "./Media";

export type HomeType = {
  meta: MetaType;
  heroMedia?: MediaType;
  nextGig: Date;
  about: AboutType;
};

const Home: CollectionConfig = {
  slug: "Home",
  fields: [
    {
      name: "heroMedia",
      label: "Hero Media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "nextGig",
      label: "Prochaine Date",
      type: "date",
      required: true,
    },
    about,
    meta,
  ],
};
export default Home;
