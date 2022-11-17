import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Concerts from "./collections/Concerts";
import Media from "./collections/Media";
import Home from "./collections/Home";
import Music from "./collections/Music";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Media, Home, Concerts, Music],
});
