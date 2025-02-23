import BaseButton from "@components/BaseButton/BaseButton";
import { HomeContent, HomeTextBox } from "./Home.styles";
import { getRandomText } from "@utils/getHomeText";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Haebom from "@assets/icons/haebom.png";
// test
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/writeDiary");
  };
  useEffect(() => {
    console.log("겟아이템:" + sessionStorage.getItem("accessToken"));
    if (sessionStorage.getItem("accessToken") === null) {
      console.log("토큰없음인식");
      navigate("/onboarding");
    }
  }, []);
  const [randomText, setRandomText] = useState<string>("");
  useEffect(() => {
    const newText = getRandomText();
    setRandomText(newText);
  }, []);
  return (
    <>
      <HomeContent>
        <HomeTextBox>{randomText}</HomeTextBox>
        <img src={Haebom} />
        <BaseButton buttonType="abled" children="추억 남길래요!" onClick={handleClick} />
      </HomeContent>
    </>
  );
};

export default Home;
