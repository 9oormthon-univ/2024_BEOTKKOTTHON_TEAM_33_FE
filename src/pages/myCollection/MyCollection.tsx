import * as S from "./MyCollection.styles";
import { useState } from "react";
import Swiper from "@components/Swiper/Swiper";
import { useNavigate } from "react-router-dom";
import useDiary from "@hooks/useDiary";

const MyCollection = () => {
  const { data: togetherData } = useDiary(1);
  const { data: orderData } = useDiary(2);
  const navigate = useNavigate();

  console.log(togetherData);
  console.log(orderData);

  const [currentTab, setCurrentTab] = useState("together");

  return (
    <>
      <S.TabBarWrapper>
        <S.TabButton onClick={() => setCurrentTab("together")}>
          {currentTab === "together" ? (
            <S.BoldText>모아서 보기</S.BoldText>
          ) : (
            <S.NormalText>모아서 보기</S.NormalText>
          )}

          {currentTab === "together" && <S.UnderLine />}
        </S.TabButton>
        <S.TabButton onClick={() => setCurrentTab("inOrder")}>
          {currentTab === "inOrder" ? (
            <S.BoldText>순서대로 보기</S.BoldText>
          ) : (
            <S.NormalText>순서대로 보기</S.NormalText>
          )}

          {currentTab === "inOrder" && <S.UnderLine />}
        </S.TabButton>
      </S.TabBarWrapper>
      {currentTab === "together" ? (
        <S.TogetherWrapper>
          {Array.isArray(togetherData) &&
            togetherData.map((data: any, index) => (
              <S.CategoryWrapper key={index}>
                <S.CategoryTitle>{data.hashtagName}</S.CategoryTitle>
                <Swiper>
                  {data.diaryResDtoList.content.map((diary: any) => (
                    <S.CategoryImageWrapper key={diary.diaryId}>
                      <S.CategoryImage src={diary.imageResDtoList[0].convertImageUrl} />
                    </S.CategoryImageWrapper>
                  ))}
                </Swiper>
              </S.CategoryWrapper>
            ))}
        </S.TogetherWrapper>
      ) : (
        <S.InOrderWrapper>
          <S.ThumbnailWrapper onClick={() => navigate("/diaryDetail?from=myCollection")}>
            <S.ThumbnailCover>
              <S.ThumbnailTitle>즐거운 꽃놀이</S.ThumbnailTitle>
              <S.ThumbnailDate>2024년 3월 24일</S.ThumbnailDate>
            </S.ThumbnailCover>
            <S.ThumbnailImage src="https://avatars.githubusercontent.com/u/139189221?v=4" />
          </S.ThumbnailWrapper>

          <S.ThumbnailWrapper onClick={() => navigate("/diaryDetail?from=myCollection")}>
            <S.ThumbnailCover>
              <S.ThumbnailTitle>붕어빵 삼대</S.ThumbnailTitle>
              <S.ThumbnailDate>2024년 3월 17일</S.ThumbnailDate>
            </S.ThumbnailCover>
            <S.ThumbnailImage src="https://avatars.githubusercontent.com/u/139189221?v=4" />
          </S.ThumbnailWrapper>
        </S.InOrderWrapper>
      )}
    </>
  );
};

export default MyCollection;
