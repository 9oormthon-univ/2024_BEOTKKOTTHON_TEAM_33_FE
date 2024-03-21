import * as S from "./RecordBottomSheetContent.styles";
import * as CS from "../BaseBottomSheetContent/BaseBottomSheetContent.styles";
import RecordBar from "@components/RecordBar/RecordBar";
import { useState } from "react";
import RecordIcon from "@assets/icons/recordIcon.svg?react";
import StopIcon from "@assets/icons/stopIcon.svg?react";
import ReplayIcon from "@assets/icons/replayIcon.svg?react";
import { RecordBottomSheetContentProps } from "./RecordBottomSheetContent.types";

const RecordBottomSheetContent = ({ setIsVisible }: RecordBottomSheetContentProps) => {
  const [barType, setBarType] = useState<"beforeRecord" | "recording" | "afterRecord">(
    "beforeRecord"
  );

  return (
    <CS.BaseBottomSheetContentWrapper>
      <CS.MainTitle>추억을 말해주세요!</CS.MainTitle>
      <RecordBar barType={barType} />
      <S.BottomSectionWrapper>
        <S.CancelText onClick={() => setIsVisible(false)}>취소</S.CancelText>
        {barType === "beforeRecord" ? (
          <button onClick={() => setBarType("recording")}>
            <RecordIcon />
          </button>
        ) : barType === "recording" ? (
          <button onClick={() => setBarType("afterRecord")}>
            <StopIcon />
          </button>
        ) : (
          <button onClick={() => setBarType("beforeRecord")}>
            <ReplayIcon />
          </button>
        )}
        <S.DoneText
          onClick={
            // TODO: STT 기능 추가
            () => setIsVisible(false)
          }
        >
          완료
        </S.DoneText>
      </S.BottomSectionWrapper>
    </CS.BaseBottomSheetContentWrapper>
  );
};

export default RecordBottomSheetContent;
