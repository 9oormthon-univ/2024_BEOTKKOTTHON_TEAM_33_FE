import { OtherDiaryCard } from "@components/OtherDiaryCard/OtherDiaryCard";
import * as S from "./OtherCollection.styles";
import { useState, useEffect } from "react";
import DownButton from "@assets/icons/ion_chevron-down.svg?react";
import BottomModal from "./BottomModal";
import useOtherCollection from "@hooks/useOtherCollection";
import { Card } from "./OtherCollection.types";

const OtherCollection = () => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth() + 1;

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [card, setCard] = useState([]);
  const [filterOption, setFilterOption] = useState(1);
  const [presentMonth, setPresentMonth] = useState(currentMonth);
  const { data } = useOtherCollection({
    filter: filterOption,
    year: 2024,
    month: presentMonth
  });

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleFilter = (num: number) => {
    setFilterOption(num);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsHeaderSticky(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("pre" + presentMonth);
    console.log("리턴된", data); //첫 렌더링시에 이 줄이 undefined로 출력됨(곧바로 응답객체가 출력되긴 하지만) : 페이지 첫 렌더링시에 (아직 data가 들어오기 전) 호출되어서 그러는듯.. 뭔가 좋은 방법?
    if (data) {
      const cardData = data.map((card: Card) => ({
        diaryId: card.diaryId,
        title: card.title,
        writer: card.writer,
        likeCount: card.likeCount,
        photoUrl: card.imageResDtoList[0].convertImageUrl
      }));
      console.log("가공된", cardData);
      setCard(cardData);
    }
  }, [data]);

  return (
    <>
      <S.HeaderWrapper isSticky={isHeaderSticky}>
        <S.InnerWrapper>
          <S.MonthText>{presentMonth}월 일기</S.MonthText>
          <div onClick={handleModalToggle}>
            <DownButton />
          </div>
          <BottomModal
            isOpen={isModalOpen}
            onClose={handleModalToggle}
            setPresentMonth={setPresentMonth}
          />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.ChooseText onClick={() => handleFilter(1)}>최신순 | </S.ChooseText>
          <S.ChooseText onClick={() => handleFilter(2)}>인기순</S.ChooseText>
        </S.InnerWrapper>
      </S.HeaderWrapper>
      <S.CollectionWrapper>
        {card.map((cards: Card) => (
          <OtherDiaryCard
            key={cards.diaryId}
            id={cards.diaryId}
            title={cards.title}
            userName={cards.writer}
            likeNumber={cards.likeCount}
            photoUrl={cards.photoUrl}
          />
        ))}
      </S.CollectionWrapper>
    </>
  );
};

export default OtherCollection;
