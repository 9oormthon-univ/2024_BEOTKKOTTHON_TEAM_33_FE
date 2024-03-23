import * as S from "./EmotionChoice.styles";
import { useState } from "react";
import { UserChatBubble } from "@components/ChatBubble/ChatBubble";
const EmotionChoice = () => {
  const [isPressed, setIsPressed] = useState<string | null>(null);
  const [emotionText, setEmotionText] = useState("");
  const [isChatVisible, setIsChatVisible] = useState(false);
  // 터치 이벤트 핸들러
  const handleTouchStart = (text: string) => {
    setIsPressed(text); // 버튼이 터치되었음을 설정
  };

  const handleTouchEnd = () => {
    setIsPressed(null); // 버튼이 터치 해제됨을 설정
  };
  const handleEmotionSelect = (emotion: string) => {
    var chatText = "";
    switch (emotion) {
      case "기쁨":
        chatText = "정말 기쁜 일이었어!";
        break;
      case "슬픔":
        chatText = "조금 슬픈 일이었어";
        break;
      case "분노":
        chatText = "화가 나는 일이었어";
        break;
      case "두려움":
        chatText = "두려웠어";
        break;
      case "놀라움":
        chatText = "정말 놀라웠어!";
        break;
    }
    setEmotionText(chatText);
    setIsChatVisible(true);
  };
  const emotions = ["기쁨", "슬픔"];
  const emotions2 = ["분노", "두려움", "놀라움"];
  return (
    <>
      <S.EmotionWrapper>
        <S.InnerWrapper>
          {emotions.map((emotion, index) => (
            <S.EmotionButton
              key={index}
              onTouchStart={() => handleTouchStart(emotion)}
              onTouchEnd={handleTouchEnd}
              active={isPressed === emotion}
              width="auto"
              onClick={() => handleEmotionSelect(emotion)}
            >
              {emotion}
            </S.EmotionButton>
          ))}
        </S.InnerWrapper>

        <S.InnerWrapper>
          {emotions2.map((emotion, index) => (
            <S.EmotionButton
              key={index}
              onTouchStart={() => handleTouchStart(emotion)}
              onTouchEnd={handleTouchEnd}
              active={isPressed === emotion}
              width="auto"
              onClick={() => handleEmotionSelect(emotion)}
            >
              {emotion}
            </S.EmotionButton>
          ))}
        </S.InnerWrapper>
        {isChatVisible && <UserChatBubble text={emotionText} />}
      </S.EmotionWrapper>
    </>
  );
};

export default EmotionChoice;
