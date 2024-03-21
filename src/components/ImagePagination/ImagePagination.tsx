import React from "react";
import { LoginText, LoginWrapper } from "./ImagePagination.styles";
import { useSwipeable } from "react-swipeable";
import Dot1 from "@assets/icons/Group 986618.svg?react";
import Dot2 from "@assets/icons/dot2.svg?react";
import Dot3 from "@assets/icons/dot3.svg?react";

interface ImagePaginationProps {
  images: string[];
  isLogin: boolean;
}

const ImagePagination = ({ images, isLogin }: ImagePaginationProps) => {
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
        <LoginWrapper {...handlers}>
          <img src={images[currentIndex]} />
          {currentIndex == 0 ? (
            <>
              <LoginText>
                음성으로 인생과 추억을 담은 <br />
                일기를 만들어보세요
              </LoginText>
              <Dot1 />
            </>
          ) : null}
          {currentIndex == 1 ? (
            <>
              <LoginText>
                좋았던 일들을
                <br />
                가족, 친구와 공유해요
              </LoginText>
              <Dot2 />
            </>
          ) : null}
          {currentIndex == 2 ? (
            <>
              <LoginText>
                자동 정리된 주제별로
                <br />
                일기를 모아봐요
              </LoginText>
              <Dot3 />
            </>
          ) : null}
        </LoginWrapper>
      ) : null}
    </>
  );
};

export default ImagePagination;
