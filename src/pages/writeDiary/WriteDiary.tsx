import { useEffect, useRef, useState } from "react";
import * as S from "./WriteDiary.styles";
import { BotChatBubble } from "@components/ChatBubble/ChatBubble";
import BaseBottomSheetContent from "@components/BaseBottomSheetContent/BaseBottomSheetContent";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import ImagePagination from "@components/ImagePagination/ImagePagination";
import RecordBottomSheetContent from "@components/RecordBottomSheetContent/RecordBottomSheetContent";
import EmotionChoice from "@components/EmotionChoice/EmotionChoice";
import * as T from "./WriteDiary.types";
import { photoURLState } from "@stores/photoURLStore";
import { useRecoilState } from "recoil";

const WriteDiary = () => {
  const [images] = useRecoilState(photoURLState);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isEmotionVisible, setIsEmotionVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const chatListRef = useRef<HTMLDivElement>(null);
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => {
    setIsPressed(true); // 버튼이 터치되었음을 설정
  };

  const handleTouchEnd = () => {
    setIsPressed(false); // 버튼이 터치 해제됨을 설정
  };
  useEffect(() => {
    console.log(images);

    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
    if (isImageVisible === false) {
      //이 코드가 있어야 자동으로 바텀모달이 올라오는데, 이게 있어도 처음에만 모달이 올라와야하는 기능은 구현되지 않음
      //60번째줄 연산자가 있어야 처음에만 모달이 올라옴
      //bottomsheet 코드를 보니, isvisible이 true여야 렌더링이 됨->이 코드 없으면 isvisible값으로 false가 가니까 렌더링 안됨(윗문장 전자의 이유)
      //이 코드는 윗문장의 두 경우 모두 실행됨 (첫 렌더링시엔 isImageViskble이 false니까)
      //페이지네이션 있을시에 페이지네이션이 렌더링되면서 isImageVisible이 true로 바뀌어서 바텀모달은 렌더링 안됨?
      const timer = setTimeout(() => {
        setIsVisible(true);
        console.log("실행함");
        console.log(isImageVisible);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  }, [isRecording]);

  // test (의존성배열로 줘야 변화가 잡힌다)
  useEffect(() => {
    setTimeout(() => {
      console.log("10초후" + isImageVisible);
    }, 100);
  }, [isImageVisible]);
  const handleStartRecord = () => {
    setIsRecording(true);
    console.log(isRecording);
  };

  return (
    <>
      <S.ChatWrapper ref={chatListRef} isRecording={isRecording}>
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <BotChatBubble text={"이야기를 남기고 싶은\n사진을 선택해 주세요."} num={2} />

        {isImageVisible === false ? (
          <BottomSheet isVisible={isVisible} setIsVisible={setIsVisible}>
            <BaseBottomSheetContent />
          </BottomSheet>
        ) : null}
        {isImageVisible === true ? (
          <>
            <BotChatBubble text="이 사진에 어떤 추억이 있는지 알려주세요~!"></BotChatBubble>
            <BotChatBubble text={T.recommend} num={2}></BotChatBubble>
          </>
        ) : null}
        {images ? (
          <>
            <S.PaginationWrapper>
              <ImagePagination
                images={images as string[]}
                isLogin={false}
                setImageVisible={setIsImageVisible}
              />
              {isImageVisible ? (
                <S.TalkStartButton
                  onClick={handleStartRecord}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  isPressed={isPressed}
                >
                  추억 얘기하기
                </S.TalkStartButton>
              ) : null}
            </S.PaginationWrapper>
          </>
        ) : null}
        {isEmotionVisible ? (
          <>
            <BotChatBubble text={"이야기 잘 들었어요!\n이때의 기분은 어떠셨나요?"} />
            <EmotionChoice />
          </>
        ) : null}
      </S.ChatWrapper>

      {isRecording && <div style={{ height: "500px" }} />}
      <BottomSheet isVisible={isRecording} setIsVisible={setIsRecording}>
        <RecordBottomSheetContent
          setIsVisible={setIsRecording}
          setEmotionVisible={setIsEmotionVisible}
        />
      </BottomSheet>
    </>
  );
};

export default WriteDiary;
