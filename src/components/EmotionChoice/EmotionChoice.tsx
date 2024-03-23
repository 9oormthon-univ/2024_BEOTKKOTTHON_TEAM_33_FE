import * as S from "./EmotionChoice.styles";
import { useState } from "react";
const EmotionChoice = () => {
  const [isPressed, setIsPressed] = useState<string | null>(null);

  // 터치 이벤트 핸들러
  const handleTouchStart = (text: string) => {
    setIsPressed(text); // 버튼이 터치되었음을 설정
  };

  const handleTouchEnd = () => {
    setIsPressed(null); // 버튼이 터치 해제됨을 설정
  };
  const emotions = ["기쁨", "슬픔"];
  const emotions2 = ["분노", "두려움", "놀라움"];
  return (
    <>
      <S.EmotionWrapper>
        <S.InnerWrapper>
          {emotions.map((emotion, _) => (
            <S.EmotionButton
              onTouchStart={() => handleTouchStart(emotion)}
              onTouchEnd={handleTouchEnd}
              active={isPressed === emotion}
              width="auto"
            >
              {emotion}
            </S.EmotionButton>
          ))}
        </S.InnerWrapper>

        <S.InnerWrapper>
          {emotions2.map((emotion, _) => (
            <S.EmotionButton
              onTouchStart={() => handleTouchStart(emotion)}
              onTouchEnd={handleTouchEnd}
              active={isPressed === emotion}
              width="auto"
            >
              {emotion}
            </S.EmotionButton>
          ))}
        </S.InnerWrapper>
      </S.EmotionWrapper>
    </>
  );
};

export default EmotionChoice;
