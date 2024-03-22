import * as S from "./MyCollection.styles";
import { useState } from "react";
import useImages from "@hooks/useImages";
import Swiper from "@components/Swiper/Swiper";
import { useNavigate } from "react-router-dom";

const MyCollection = () => {
  const { data: photos } = useImages();
  const navigate = useNavigate();

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
        </S.TogetherWrapper>
      ) : (
        <S.InOrderWrapper>
          {/* TODO: API 연동 후 navigate 시 id값 넘겨주기 */}
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
