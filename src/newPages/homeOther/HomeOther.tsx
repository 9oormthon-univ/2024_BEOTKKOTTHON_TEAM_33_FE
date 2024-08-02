/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import PostComponent from "./PostComponent";
import { useNavigate } from "react-router-dom";
import GreenPlusIcon from "@assets/icons/GreenPlus.svg?react";
import MeWriteIcon from "@assets/icons/MeWrite.svg?react";
import WriteIcon from "@assets/icons/helpwrite.svg?react";
import * as S from "./HomeOther.styles";
import { NewCard } from "@pages/otherCollection/OtherCollection.types";
import useOtherCollection from "@hooks/useOtherCollection";

const HomeOther = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const [activeTab, setActiveTab] = useState<"latest" | "popular">("latest");
  const [showSubButtons, setShowSubButtons] = useState(false);
  const [card, setCard] = useState([]);
  const [filterOption, setFilterOption] = useState(1);
  const navigate = useNavigate();
  const { data } = useOtherCollection({
    filter: filterOption,
    year: 2024,
    month: currentMonth
  });

  // const handleFilter = (num: number) => {
  //   setFilterOption(num);

  // };

  const handleChange = (num: number) => {
    setFilterOption(num);
    if (num === 1) {
      setActiveTab("latest");
    } else if (num === 2) {
      setActiveTab("popular");
    }
  };
  useEffect(() => {
    console.log("겟아이템:" + sessionStorage.getItem("accessToken"));
    if (sessionStorage.getItem("accessToken") === null) {
      console.log("토큰없음인식");
      navigate("/onBoarding");
    }
  }, []);
  useEffect(() => {
    console.log("pre" + currentMonth);
    console.log("리턴된", data); //첫 렌더링시에 이 줄이 undefined로 출력됨(곧바로 응답객체가 출력되긴 하지만) : 페이지 첫 렌더링시에 (아직 data가 들어오기 전) 호출되어서 그러는듯.. 뭔가 좋은 방법?
    if (data) {
      const cardData = data.map((card: NewCard) => ({
        diaryId: card.diaryId,
        title: card.title,
        writer: card.writer,
        likeCount: card.likeCount,
        photoUrl: card.imageResDtoList[0].convertImageUrl,
        content: card.content,
        createAt: card.createAt
      }));
      console.log("가공된", cardData);
      setCard(cardData);
    }
  }, [data]);
  useEffect(() => {
    if (showSubButtons) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSubButtons]);
  const handlePlusButtonClick = () => {
    setShowSubButtons(!showSubButtons);
  };

  return (
    <>
      {showSubButtons && <S.Overlay />}
      <S.Container>
        <S.TabWrapper>
          <S.Tab active={activeTab === "latest"} onClick={() => handleChange(1)}>
            최신순
          </S.Tab>
          <S.Tab active={activeTab === "popular"} onClick={() => handleChange(2)}>
            인기순
          </S.Tab>
        </S.TabWrapper>
        {card.map((cards: NewCard) => (
          <PostComponent
            key={cards.diaryId}
            id={cards.diaryId}
            title={cards.title}
            userName={cards.writer}
            likeNumber={cards.likeCount}
            photoUrl={cards.photoUrl}
            content={cards.content}
            createAt={cards.createAt}
          />
        ))}
      </S.Container>
      <S.StyledIconContainer>
        {showSubButtons && (
          <>
            <S.IconWrapper onClick={() => navigate("/writeDiary")}>
              <MeWriteIcon />
            </S.IconWrapper>
            <S.IconWrapper onClick={() => navigate("/writeDiary")}>
              <WriteIcon />
            </S.IconWrapper>
          </>
        )}
        <div onClick={handlePlusButtonClick}>
          <GreenPlusIcon />
        </div>
      </S.StyledIconContainer>
    </>
  );
};

export default HomeOther;
