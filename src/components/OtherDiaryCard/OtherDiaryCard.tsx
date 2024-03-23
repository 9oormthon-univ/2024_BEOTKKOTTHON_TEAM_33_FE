import * as S from "./OtherDiaryCard.styles";
import ThumbsIcon from "@assets/icons/carbon_thumbs-up.svg?react";
import { DiaryCardProps } from "./OtherDiaryCard.types";
import { useNavigate } from "react-router-dom";
export const OtherDiaryCard = ({ title, userName, likeNumber, photoUrl }: DiaryCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/diaryDetail");
  };
  return (
    <>
      <S.CardWrapper onClick={handleClick}>
        <S.DiaryTitle>
          {title}
          <S.LikeWrapper>
            <ThumbsIcon></ThumbsIcon>
            <S.Like>{likeNumber}개</S.Like>
          </S.LikeWrapper>
        </S.DiaryTitle>
        <S.UserName>{userName}</S.UserName>
        <S.Photo url={photoUrl}></S.Photo>
      </S.CardWrapper>
    </>
  );
};
