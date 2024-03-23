import * as S from "./BaseBottomSheetContent.styles";
import BaseButton from "@components/BaseButton/BaseButton";
import { useNavigate } from "react-router-dom";

const BaseBottomSheetContent = () => {
  const navigate = useNavigate();

  return (
    <S.BaseBottomSheetContentWrapper>
      <S.MainTitle>앨범에서 사진을 선택할까?</S.MainTitle>
      <S.SubTitle>앨범에서 사진을 선택할까?</S.SubTitle>
      <BaseButton buttonType="abled" onClick={() => navigate("/album")}>
        사진 고르기
      </BaseButton>
    </S.BaseBottomSheetContentWrapper>
  );
};

export default BaseBottomSheetContent;
