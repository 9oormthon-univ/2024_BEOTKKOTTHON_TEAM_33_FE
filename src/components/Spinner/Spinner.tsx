import Lottie from "react-lottie";
import SpinnerJSON from "@assets/lotties/spinner.json";
import * as S from "./Spinnter.styles";

const Spinner = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: SpinnerJSON,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <S.SpinnerWrapper>
      <Lottie options={lottieOptions} style={{ width: "100px", height: "100px" }} />
    </S.SpinnerWrapper>
  );
};

export default Spinner;
