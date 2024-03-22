import BaseButton from "@components/BaseButton/BaseButton";
import { HomeContent, HomeTextBox } from "./Home.styles";
import Haebom from "@assets/icons/7309697.svg?react";
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
    // 로컬 스토리지에서 isFirstVisit 값을 가져옴
    const isFirstVisit = localStorage.getItem("isFirstVisit");
    console.log(isFirstVisit);
    // isFirstVisit 값이 null이거나 false이면(첫 방문이거나 온보딩을 이미 마친 경우)
    // 온보딩 페이지로 이동
    if (isFirstVisit === "true" || isFirstVisit === null) {
      navigate("/onboarding");
    }
  }, [navigate]);
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
