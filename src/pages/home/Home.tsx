import BaseButton from "@components/BaseButton/BaseButton";
import { HomeContent, HomeTextBox } from "./Home.styles";
import { getRandomText } from "@utils/getHomeText";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <img src="https://github.com/goormthon-Univ/2024_BEOTKKOTTHON_TEAM_33_FE/blob/develop/src/assets/icons/haebom.png?raw=trueassets/icons/haebom.png" />
        <BaseButton buttonType="abled" children="추억 남길래요!" onClick={handleClick} />
      </HomeContent>
    </>
  );
};

export default Home;
