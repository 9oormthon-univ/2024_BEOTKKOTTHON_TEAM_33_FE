import * as S from "./RecordBar.styles";
import { RecordBarProps } from "./RecordBar.types";
import PlayIcon from "@assets/icons/playIcon.svg?react";
import Lottie from "react-lottie";
import BeforePlaying from "@assets/lotties/beforePlaying.json";
import Playing from "@assets/lotties/playing.json";
import { useEffect, useState } from "react";
import formatTime from "@utils/formatTime";

const RecordBar = ({ barType, isPlaying, setIsPlaying }: RecordBarProps) => {
  const lottieOptions = {
    loop:
      barType === "beforeRecord"
        ? false
        : barType === "recording"
        ? true
        : barType === "afterRecord"
        ? isPlaying
          ? true
          : false
        : false,
    autoplay:
      barType === "beforeRecord"
        ? false
        : barType === "recording"
        ? true
        : barType === "afterRecord"
        ? isPlaying
          ? true
          : false
        : false,
    animationData: barType === "beforeRecord" ? BeforePlaying : Playing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [time, setTime] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (barType === "recording") {
      setTime(0);

      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (isPlaying) {
      const recordTime = time;
      setTime(0);

      timerId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime + 1 >= recordTime) {
            clearInterval(timerId as NodeJS.Timeout);
          }
          return prevTime + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerId as NodeJS.Timeout);
    };
  }, [barType, isPlaying]);

  return (
    <S.RecordBarWrapper barType={barType}>
      {barType === "afterRecord" && (
        // TODO: 재생 기능 추가
        <button onClick={() => setIsPlaying(true)}>
          <PlayIcon />
        </button>
      )}
      <S.LottieWrapper barType={barType}>
        {barType === "beforeRecord" ? (
          <Lottie options={lottieOptions} height={40} width={75} />
        ) : (
          <Lottie options={lottieOptions} height={40} width={75} />
        )}
      </S.LottieWrapper>
      <S.TimerText barType={barType}>{formatTime(time)}</S.TimerText>
    </S.RecordBarWrapper>
  );
};

export default RecordBar;
