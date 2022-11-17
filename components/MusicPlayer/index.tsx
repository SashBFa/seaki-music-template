import { MusicType } from "../../collections/Music";
import ReactAudioPlayer from "react-audio-player";

export type Props = {
  music: MusicType;
};

const MusicPlayer = ({ music }: Props) => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-full max-w-7xl z-10 text-white px-6">
      <h3 className="text-2xl">{music.subtitle}</h3>
      <h2 className="lg:text-8xl text-4xl font-bold text-transparent strokeText">
        {music.title}
      </h2>
      <ReactAudioPlayer
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/music/${music.filename}`}
        controls
        className="mt-6"
      />
    </div>
  );
};

export default MusicPlayer;
