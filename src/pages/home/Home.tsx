import BaseButton from "@components/BaseButton/BaseButton";
import { HomeContent, HomeTextBox } from "./Home.styles";
import Haebom from "@assets/icons/7309697.svg?react";
import { getRandomText } from "./Home.type";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/writeDiary");
  };
  const [randomText, setRandomText] = useState<string>("");
  useEffect(() => {
    const newText = getRandomText();
    setRandomText(newText);
  }, []);

  return (
    <>
      <HomeContent>
        <HomeTextBox>{randomText}</HomeTextBox>
        <Haebom />
        <BaseButton buttonType="abled" children="추억 남길래요!" onClick={handleClick} />
      </HomeContent>
    </>
  );
};

export default Home;
