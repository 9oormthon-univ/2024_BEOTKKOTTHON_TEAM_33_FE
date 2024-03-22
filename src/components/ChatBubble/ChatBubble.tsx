import * as S from "./ChatBubble.styles";
import ChatIcon from "@assets/icons/chaticon.svg?react";
import { BubbleText, defaultOptions } from "./ChatBubble.types";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";

export const UserChatBubble = ({ text }: BubbleText) => {
  return (
    <>
      <S.UserMessageWrapper>{text}</S.UserMessageWrapper>
    </>
  );
};

export const BotChatBubble = ({ text }: BubbleText) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // 컴포넌트가 unmount될 때 타이머정리
  }, []);
  return (
    <>
      <S.BotOuterWrapper>
        <ChatIcon />
        {isLoading === true ? (
          <S.BotMessageWrapper>
            <Lottie options={defaultOptions} />
          </S.BotMessageWrapper>
        ) : (
          <S.BotMessageWrapper>{text}</S.BotMessageWrapper>
        )}
      </S.BotOuterWrapper>
    </>
  );
};
