import React from "react";
import * as S from "./ImagePagination.styles";
import { ImagePaginationProps } from "./ImagePagination.types";
import { useSwipeable } from "react-swipeable";
import Dot1 from "@assets/icons/Group 986618.svg?react";
import Dot2 from "@assets/icons/dot2.svg?react";
import Dot3 from "@assets/icons/dot3.svg?react";
import Dot from "./Dot";

const ImagePagination = ({ images, isLogin, width, height }: ImagePaginationProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  });

  return (
    <>
      {/* 로그인시엔 dot1과 문구, 아니면 개별dots(일기생성) 렌더링하게 */}
      {isLogin === true ? (
        <S.LoginWrapper {...handlers}>
          <img src={images[currentIndex]} />
          {currentIndex == 0 ? (
            <>
              <S.LoginText>
                음성으로 인생과 추억을 담은 <br />
                일기를 만들어보세요
              </S.LoginText>
              <Dot1 />
            </>
          ) : null}
          {currentIndex == 1 ? (
            <>
              <S.LoginText>
                좋았던 일들을
                <br />
                가족, 친구와 공유해요
              </S.LoginText>
              <Dot2 />
            </>
          ) : null}
          {currentIndex == 2 ? (
            <>
              <S.LoginText>
                자동 정리된 주제별로
                <br />
                일기를 모아봐요
              </S.LoginText>
              <Dot3 />
            </>
          ) : null}
        </S.LoginWrapper>
      ) : (
        <S.DiaryWrapper {...handlers}>
          <img
            src={images[currentIndex]}
            style={{
              objectFit: "cover",
              width: width ? width : "288px",
              height: height ? height : "288px",
              borderRadius: "20px",
              overflow: "auto"
            }}
          />
          <S.DotContainer>
            {images.map((_, index) => (
              <Dot key={index} active={index === currentIndex} />
            ))}
          </S.DotContainer>
          {/* <S.TalkStartButton>추억 얘기하기</S.TalkStartButton> */}
        </S.DiaryWrapper>
      )}
    </>
  );
};

export default ImagePagination;
