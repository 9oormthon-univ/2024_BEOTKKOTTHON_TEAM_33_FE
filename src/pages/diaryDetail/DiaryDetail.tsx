import * as S from "./DiaryDetail.styles";
import ImagePagination from "@components/ImagePagination/ImagePagination";
import Tag from "@components/Tag/Tag";
import BaseButton from "@components/BaseButton/BaseButton";
import { useSearchParams } from "react-router-dom";
import ToggleButton from "@components/ToggleButton/ToggleButton";
import { useState } from "react";
import Modal from "@components/Modal/Modal";

const DiaryDetail = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");

  const [isVisible, setIsVisible] = useState(false);
  const [isOn, setIsOn] = useState(false);

  const ModalProps = {
    title: isVisible ? "함깨보기에 내 일기를\n공유할까요?" : "내 일기 공유를\n그만둘거냐는 질문",
    isVisible: isVisible,
    setIsVisible: setIsVisible,
    isCancelTextExist: true
  };

  const images = [
    "../src/assets/icons/diaryImageTest1.jpg",
    "../src/assets/icons/diaryImageTest2.jpg",
    "../src/assets/icons/Users Network.jpg",
    "../src/assets/icons/Sending Receiving Texts Messages.jpg"
  ];

  return (
    <S.TogetherWrapper>
      <ImagePagination images={images} isLogin={false} />
      <S.MainSectionWrapper>
        <S.DateText>0000년 00월 00일</S.DateText>
        <S.TagWrapper>
          <Tag>#행복</Tag>
          <Tag>#즐거움</Tag>
          <Tag>#봄</Tag>
          <Tag>#꽃구경</Tag>
        </S.TagWrapper>
        <S.Content>
          봄을 맞아 남편과 아이들 데리고 동네에 꽃놀이를 나갔다. 요새 날이 많이 따뜻해져서 3월이지만
          벚꽃을 만날 수 있었다. 지구 온난화는 슬프지만 벚꽃을 조금 더 일찍 볼 수 있다는 건 즐거운
          일이야~ 글이 이렇게 계속 길어져서 스크롤이 생기는 경우에는 다음과 같이 헤더 아래로 사진
          포함한 모든 내용을 함께 올려주세요~! 최대 글자수는 350자로 정했던 듯? CTA와의 마진
          32px입니당!
        </S.Content>
      </S.MainSectionWrapper>
      {from === "writeDiary" ? (
        <S.ButtonWrapper>
          <BaseButton buttonType="white" width="50%">
            다시 만들기
          </BaseButton>
          <BaseButton buttonType="abled" width="50%">
            저장하기
          </BaseButton>
        </S.ButtonWrapper>
      ) : (
        <>
          <S.ToggleButtonWrapper>
            <S.ToggleButtonText>함께보기에 공유하기</S.ToggleButtonText>
            <div
              onClick={() => {
                setIsVisible(!isVisible);
                setIsOn(!isOn);
              }}
            >
              <ToggleButton />
            </div>
          </S.ToggleButtonWrapper>
          <Modal {...ModalProps}>
            <BaseButton buttonType="abled" width="100%">
              {isOn ? "공유하기" : "그에 상응하는 말"}
            </BaseButton>
          </Modal>
        </>
      )}
    </S.TogetherWrapper>
  );
};

export default DiaryDetail;
