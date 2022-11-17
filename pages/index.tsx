import getConfig from "next/config";
import { GetServerSideProps } from "next/types";
import payload from "payload";
import { HomeType } from "../collections/Home";
import { MusicType } from "../collections/Music";
import MusicPlayer from "../components/MusicPlayer";
import { Button } from "@mui/material";
import NextGig from "../components/NextGig";

export type Props = {
  home: HomeType;
  music: MusicType;
};

const {
  publicRuntimeConfig: { SERVER_URL },
} = getConfig();

const Index: React.FC<Props> = (props) => {
  const { home, music } = props;
  return (
    <section>
      <div className="relative h-80">
        <img
          src={`${SERVER_URL}/media/${home.heroMedia.filename}`}
          alt={home.heroMedia.alt}
          className="object-cover w-full h-80 object-left-bottom"
        />
        <MusicPlayer music={music} />
      </div>
      <div className="mx-6 -translate-y-12 drop-shadow-lg relative h-72 overflow-hidden rounded-lg">
        <img
          src={`${SERVER_URL}/media/bg-counter.jpg`}
          alt="wave"
          className="object-cover w-full h-full absolute top-0 left-0 -z-10"
        />
        <div className="w-full text-white flex flex-col justify-between h-full p-6">
          <div className="">
            <h3 className="text-center font-normal text-3xl mb-2">Next Gig</h3>
            <h4 className="text-center font-light opacity-80 text-base">
              Tickets for my next event are already avaible
            </h4>
          </div>
          <NextGig nextGig={home.nextGig} />
          <Button variant="contained" className="px-12 py-6 min-h-0 h-4">
            Buy Tickets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const homeQuery = await payload.find({
    collection: "home",
  });
  const musicQuery = await payload.find({
    collection: "music",
  });
  if (!homeQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }
  if (!musicQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }
  return {
    props: {
      home: homeQuery.docs[0],
      music: musicQuery.docs[0],
    },
  };
};
