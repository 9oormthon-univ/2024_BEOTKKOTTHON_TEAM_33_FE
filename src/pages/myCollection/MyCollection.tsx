import * as S from "./MyCollection.styles";
import { Suspense, useState } from "react";
import Swiper from "@components/Swiper/Swiper";
import { useNavigate } from "react-router-dom";
import useDiary from "@hooks/useDiary";
import Spinner from "@components/Spinner/Spinner";

const MyCollection = () => {
  const { data: togetherData } = useDiary(1);
  const { data: orderData } = useDiary(2);
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState("together");

  const handleImgClick = (diaryId: number) => {
    navigate(`/diaryDetail?from=myCollection&diaryId=${diaryId}`);
  };

  return (
    <Suspense fallback={<Spinner />}>
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
                      <S.CategoryImage
                        src={diary.imageResDtoList[0]?.convertImageUrl}
                        onClick={() => handleImgClick(diary.diaryId)}
                      />
                    </S.CategoryImageWrapper>
                  ))}
                </Swiper>
              </S.CategoryWrapper>
            ))}
        </S.TogetherWrapper>
      ) : (
        <S.InOrderWrapper>
          {Array.isArray(orderData) &&
            orderData.map((data: any) =>
              data.diaryResDtoList?.content.map((content: any, index: number) => (
                <S.ThumbnailWrapper key={index} onClick={() => handleImgClick(content.diaryId)}>
                  <S.ThumbnailCover>
                    <S.ThumbnailTitle>{content.title}</S.ThumbnailTitle>
                    <S.ThumbnailDate>{content.createAt}</S.ThumbnailDate>
                  </S.ThumbnailCover>
                  <S.ThumbnailImage src={content.imageResDtoList[0]?.convertImageUrl} />
                </S.ThumbnailWrapper>
              ))
            )}
        </S.InOrderWrapper>
      )}
    </Suspense>
  );
};

export default MyCollection;
