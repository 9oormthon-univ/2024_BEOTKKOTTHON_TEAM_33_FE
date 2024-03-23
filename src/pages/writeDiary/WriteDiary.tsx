import { useEffect, useRef, useState } from "react";
import * as S from "./WriteDiary.styles";
import { UserChatBubble, BotChatBubble } from "@components/ChatBubble/ChatBubble";
import BaseBottomSheetContent from "@components/BaseBottomSheetContent/BaseBottomSheetContent";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import ImagePagination from "@components/ImagePagination/ImagePagination";
import RecordBottomSheetContent from "@components/RecordBottomSheetContent/RecordBottomSheetContent";
import EmotionChoice from "@components/EmotionChoice/EmotionChoice";
const WriteDiary = () => {
  const images = [
    "../src/assets/icons/diaryImageTest1.jpg",
    "../src/assets/icons/diaryImageTest2.jpg",
    "../src/assets/icons/Users Network.jpg",
    "../src/assets/icons/Sending Receiving Texts Messages.jpg"
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true); //나중에 이부분 false로 바꾸고 api받았을때 true로 해서 쓰면됨
  const chatListRef = useRef<HTMLDivElement>(null);
  const [isPressed, setIsPressed] = useState(false);
  // const [isEmotionVisible, setIsEmotionVisible] = useState(true); //나중에 false로 바꾸고 필요할때 set으로 쓰면됨

  // 터치 이벤트 핸들러
  const handleTouchStart = () => {
    setIsPressed(true); // 버튼이 터치되었음을 설정
  };

  const handleTouchEnd = () => {
    setIsPressed(false); // 버튼이 터치 해제됨을 설정
  };

  useEffect(() => {
    setIsImageVisible(true); //나중에 삭제
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  }, [isRecording]);
  const handleStartRecord = () => {
    setIsRecording(true);
    console.log(isRecording);
  };
  return (
    <>
      <S.ChatWrapper ref={chatListRef} isRecording={isRecording}>
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <BottomSheet isVisible={isVisible} setIsVisible={setIsVisible}>
          <BaseBottomSheetContent />
        </BottomSheet>
        {isImageVisible === true ? (
          <S.PaginationWrapper>
            <ImagePagination images={images} isLogin={false} />
            <S.TalkStartButton
              onClick={handleStartRecord}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              isPressed={isPressed}
            >
              추억 얘기하기
            </S.TalkStartButton>
          </S.PaginationWrapper>
        ) : null}

        <EmotionChoice />
        <UserChatBubble text="임포트문때문에 넣어둠" />
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <UserChatBubble text="임포트문때문에 넣어둠" />
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <UserChatBubble text="임포트문때문에 넣어둠" />
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <UserChatBubble text="임포트문때문에 넣어둠" />
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <UserChatBubble text="임포트문때문에 넣어둠" />
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <UserChatBubble text="임포트문때문에 넣어둠" />
        <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
        <UserChatBubble text="임포트문때문에 넣어둠" />
      </S.ChatWrapper>
      {isRecording && <div style={{ height: "900px" }}></div>}
      <BottomSheet isVisible={isRecording} setIsVisible={setIsRecording}>
        <RecordBottomSheetContent setIsVisible={setIsRecording} />
      </BottomSheet>
    </>
  );
};

export default WriteDiary;
