import * as S from "./RecordBar.styles";
import { RecordBarProps } from "./RecordBar.types";
import PlayIcon from "@assets/icons/playIcon.svg?react";
import Lottie from "react-lottie";
import BeforePlaying from "@assets/lotties/beforePlaying.json";
import Playing from "@assets/lotties/playing.json";

const RecordBar = ({ barType, isPlaying, setIsPlaying }: RecordBarProps) => {
  const lottieOptions = {
    loop: barType === "beforeRecord" ? false : isPlaying ? true : false,
    autoplay: barType === "beforeRecord" ? false : isPlaying ? true : false,
    animationData: barType === "beforeRecord" ? BeforePlaying : Playing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

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
      <S.TimerText barType={barType}>00:00</S.TimerText>
    </S.RecordBarWrapper>
  );
};

export default RecordBar;
