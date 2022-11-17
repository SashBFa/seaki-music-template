import {
  differenceInSeconds,
  format,
  secondsToMilliseconds,
  differenceInDays,
} from "date-fns";
import { useEffect, useState } from "react";

export type Props = {
  nextGig: Date;
};

const NextGig = ({ nextGig }: Props) => {
  const dataLine = differenceInSeconds(new Date(nextGig), new Date());
  const [timer, setTimer] = useState<number>(dataLine);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="flex justify-between px-3 mb-3">
      <div className="flex flex-col items-center text-4xl">
        {differenceInDays(new Date(nextGig), new Date())}
        <span className="text-xs uppercase opacity-80 font-medium mt-2">
          days
        </span>
      </div>
      <div className="flex flex-col items-center text-4xl">
        {format(secondsToMilliseconds(timer), "HH")}
        <span className="text-xs uppercase opacity-80 font-medium mt-2">
          hours
        </span>
      </div>
      <div className="flex flex-col items-center text-4xl">
        {format(secondsToMilliseconds(timer), "mm")}
        <span className="text-xs uppercase opacity-80 font-medium mt-2">
          minutes
        </span>
      </div>
      <div className="flex flex-col items-center text-4xl">
        {format(secondsToMilliseconds(timer), "ss")}
        <span className="text-xs uppercase opacity-80 font-medium mt-2">
          seconds
        </span>
      </div>
    </div>
  );
};

export default NextGig;
