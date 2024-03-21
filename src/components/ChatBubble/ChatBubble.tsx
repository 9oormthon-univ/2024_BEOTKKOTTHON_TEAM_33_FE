import * as S from "./ChatBubble.styles";
import ChatIcon from "@assets/icons/chaticon.svg?react";
import { BubbleText } from "./ChatBubble.types";
export const UserChatBubble = ({ text }: BubbleText) => {
  return (
    <>
      <S.UserMessageWrapper>{text}</S.UserMessageWrapper>
    </>
  );
};

export const BotChatBubble = ({ text }: BubbleText) => {
  return (
    <>
      <S.BotOuterWrapper>
        <ChatIcon />
        <S.BotMessageWrapper>{text}</S.BotMessageWrapper>
      </S.BotOuterWrapper>
    </>
  );
};
