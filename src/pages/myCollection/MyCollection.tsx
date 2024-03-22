import * as S from "./MyCollection.styles";
import { useState } from "react";
import useImages from "@hooks/useImages";
import Swiper from "@components/Swiper/Swiper";

const MyCollection = () => {
  const { data: photos } = useImages();

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
      {currentTab === "together" && (
        <S.DiaryDetailWrapper>
          <S.CategoryWrapper>
            <S.CategoryTitle>3월의 일기</S.CategoryTitle>
            <Swiper>
              {photos.map((photo: any) => (
                <S.CategoryImageWrapper key={photo.id}>
                  <S.CategoryImage src={photo.download_url} />
                </S.CategoryImageWrapper>
              ))}
            </Swiper>
          </S.CategoryWrapper>

          <S.CategoryWrapper>
            <S.CategoryTitle>즐거웠던 나날</S.CategoryTitle>
            <Swiper>
              {photos.map((photo: any) => (
                <S.CategoryImageWrapper key={photo.id}>
                  <S.CategoryImage src={photo.download_url} />
                </S.CategoryImageWrapper>
              ))}
            </Swiper>
          </S.CategoryWrapper>

          <S.CategoryWrapper>
            <S.CategoryTitle>함께한 추억</S.CategoryTitle>
            <Swiper>
              {photos.map((photo: any) => (
                <S.CategoryImageWrapper key={photo.id}>
                  <S.CategoryImage src={photo.download_url} />
                </S.CategoryImageWrapper>
              ))}
            </Swiper>
          </S.CategoryWrapper>

          <S.CategoryWrapper>
            <S.CategoryTitle>혼자서도 행복해</S.CategoryTitle>
            <Swiper>
              {photos.map((photo: any) => (
                <S.CategoryImageWrapper key={photo.id}>
                  <S.CategoryImage src={photo.download_url} />
                </S.CategoryImageWrapper>
              ))}
            </Swiper>
          </S.CategoryWrapper>
        </S.DiaryDetailWrapper>
      )}
    </>
  );
};

export default MyCollection;
