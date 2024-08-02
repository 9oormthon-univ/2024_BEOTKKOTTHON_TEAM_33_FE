import { OnBoradingWrapper } from "./OnBoarding.styles";
import Icon from "@assets/icons/너나들이온보딩.svg?react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const OnBoarding = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // localStorage.setItem("isFirstVisit", "false");
      navigate("/login");
    }, 3000);
  }, []);
  return (
    <>
      <OnBoradingWrapper>
        <Icon />
      </OnBoradingWrapper>
    </>
  );
};

export default OnBoarding;
