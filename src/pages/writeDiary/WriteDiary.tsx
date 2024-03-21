import { useEffect, useRef } from "react";
import * as S from "./WriteDiary.styles";
import { UserChatBubble, BotChatBubble } from "@components/ChatBubble/ChatBubble";

const WriteDiary = () => {
  // 채팅이 업데이트될 때마다 아래로 스크롤
  const chatListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current.scrollHeight);
  });

  return (
    <S.ChatWrapper ref={chatListRef}>
      <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
      <UserChatBubble
        text="오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가
        좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요."
      />
      <BotChatBubble text="네, 정말 좋아요!" />
      <UserChatBubble text="안녕안녕하세요" />
      <BotChatBubble text="안녕하세요! 제게 이야기를 들려주시면 멋지게 정리해 드릴게요!" />
      <UserChatBubble
        text="오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가
        좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요.오늘 날씨가 좋네요."
      />
      <BotChatBubble text="네, 정말 좋아요!" />
      <UserChatBubble text="안녕안녕하세요" />
      <BotChatBubble text="네, 정말 좋아요!" />
      <UserChatBubble text="안녕안녕하세요" />
      <BotChatBubble text="네, 정말 좋아요!" />
      <UserChatBubble text="안녕안녕하세요" />
      <BotChatBubble text="네, 정말 좋아요!" />
      <UserChatBubble text="스크롤테스트" />
    </S.ChatWrapper>
  );
};

export default WriteDiary;
