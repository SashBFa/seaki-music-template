import { Type as MediaType, Size } from "../../collections/Media";

type Props = MediaType & {
  className?: string;
  preferredSize?: Size;
};

const Media: React.FC<Props> = ({
  mimeType,
  filename,
  alt,
  preferredSize,
  sizes,
}) => {
  // if (mimeType.includes("video")) {
  //   return (
  //     <div>
  //       <video autoPlay muted loop controls={false} className="w-full h-full">
  //         <source
  //           src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filename}`}
  //         />
  //       </video>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full h-full absolute top-0 left-0">
      <img
        className=" object-cover"
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${
          sizes?.[preferredSize]?.filename || filename
        }`}
        alt={alt}
      />
    </div>
  );
};

export default Media;
