import { useEffect, useRef, useState } from "react";
import * as S from "./WriteDiary.styles";
import { UserChatBubble, BotChatBubble } from "@components/ChatBubble/ChatBubble";
import BaseBottomSheetContent from "@components/BaseBottomSheetContent/BaseBottomSheetContent";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import ImagePagination from "@components/ImagePagination/ImagePagination";

const WriteDiary = () => {
  const images = [
    "../src/assets/icons/diaryImageTest1.jpg",
    "../src/assets/icons/diaryImageTest2.jpg",
    "../src/assets/icons/Users Network.jpg",
    "../src/assets/icons/Sending Receiving Texts Messages.jpg"
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true); //나중에 이부분 false로 바꾸고 api받았을때 true로 해서 쓰면됨
  const chatListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsImageVisible(true); //나중에 삭제
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.ChatWrapper ref={chatListRef}>
      <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
      <BottomSheet isVisible={isVisible} setIsVisible={setIsVisible}>
        <BaseBottomSheetContent />
      </BottomSheet>
      {isImageVisible === true ? <ImagePagination images={images} isLogin={false} /> : null}
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
  );
};

export default WriteDiary;
