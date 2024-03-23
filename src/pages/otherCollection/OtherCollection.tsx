import { OtherDiaryCard } from "@components/OtherDiaryCard/OtherDiaryCard";
import * as S from "./OtherCollection.styles";
import { useState, useEffect } from "react";
import DownButton from "@assets/icons/ion_chevron-down.svg?react";
import BottomModal from "./BottomModal";

const OtherCollection = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
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

  return (
    <>
      <S.HeaderWrapper isSticky={isHeaderSticky}>
        <S.InnerWrapper>
          <S.MonthText>3월 일기</S.MonthText>
          <div onClick={handleModalToggle}>
            <DownButton />
          </div>
          <BottomModal isOpen={isModalOpen} onClose={handleModalToggle} />
        </S.InnerWrapper>
        <S.InnerWrapper>
          <S.ChooseText>최신순 | </S.ChooseText>
          <S.ChooseText>인기순</S.ChooseText>
        </S.InnerWrapper>
      </S.HeaderWrapper>
      <S.CollectionWrapper>
        <OtherDiaryCard
          title="일기 제목 이라네"
          userName="나윤댕"
          likeNumber={24}
          photoUrl="../src/assets/icons/diaryImageTest1.jpg"
        />
        <OtherDiaryCard
          title="일기 제목 이라네"
          userName="나윤댕"
          likeNumber={24}
          photoUrl="../src/assets/icons/diaryImageTest1.jpg"
        />
        <OtherDiaryCard
          title="일기 제목 이라네"
          userName="나윤댕"
          likeNumber={24}
          photoUrl="../src/assets/icons/diaryImageTest1.jpg"
        />
        <OtherDiaryCard
          title="일기 제목 이라네"
          userName="나윤댕"
          likeNumber={24}
          photoUrl="../src/assets/icons/diaryImageTest1.jpg"
        />
      </S.CollectionWrapper>
    </>
  );
};

export default OtherCollection;
