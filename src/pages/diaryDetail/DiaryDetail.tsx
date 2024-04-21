import * as S from "./DiaryDetail.styles";
import ImagePagination from "@components/ImagePagination/ImagePagination";
import Tag from "@components/Tag/Tag";
import BaseButton from "@components/BaseButton/BaseButton";
import { useSearchParams } from "react-router-dom";
import ToggleButton from "@components/ToggleButton/ToggleButton";
import { useState, useEffect, Suspense } from "react";
import Modal from "@components/Modal/Modal";
import VoiceButtonIcon from "@assets/icons/voiceButtonIcon.svg?react";
import LikeButtonAbled from "@assets/icons/likeButton_abled.svg?react";
import LikeButtonDisabled from "@assets/icons/likeButton_disabled.svg?react";
import formatDate from "@utils/formatDate";
import { ImagesType } from "./DiaryDetail.types";
import useReCreateDiary from "@hooks/useReCreateDiary";
import { diaryState } from "@stores/diaryStore";
import { useRecoilState } from "recoil";
import Header from "@components/HeaderNav/HeaderNav";
import Spinner from "@components/Spinner/Spinner";
import useDiaryDetail from "@hooks/useDiaryDetail";
import useShareDiary from "@hooks/useShareDiary";
import usePostLike from "@hooks/usePostLike";
import useDeleteLike from "@hooks/useDeleteLike";

const DiaryDetail = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");
  const diaryId = Number(searchParams.get("diaryId"));

  const [diary] = useRecoilState(diaryState);

  const [isVisible, setIsVisible] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [diaryData, setDiaryData] = useState(JSON.parse(localStorage.getItem("diary") as string));
  const [images, setImages] = useState<string[]>([]);

  const { data: diaryDetailData, refetch } = diaryId && (useDiaryDetail(diaryId) as any);
  const { mutate: reCreateDiary, isSuccess } = useReCreateDiary();
  const { mutate: postShareDiary } = useShareDiary(setIsVisible, isOn, setIsOn);
  const { mutateAsync: postLike } = usePostLike(setIsLike);
  const { mutateAsync: deleteLike } = useDeleteLike(setIsLike);

  const ModalProps = {
    title: isOn ? "공유한 일기를\n비공개할까요?" : "함깨보기에 내 일기를\n공유할까요?",
    isVisible,
    setIsVisible,
    isCancelTextExist: true
  };

  const handleShareDiary = (diaryId: number) => {
    postShareDiary(diaryId);
  };

  useEffect(() => {
    if (diaryData) {
      setImages(
        Array.isArray(diaryData?.images) &&
          diaryData?.images.map((image: ImagesType) => {
            return image.convertImageUrl;
          })
      );
    }
  }, []);

  useEffect(() => {
    if (isSuccess) setIsLoading(false);
  }, [isSuccess]);

  useEffect(() => {
    if (diaryDetailData) {
      setDiaryData(diaryDetailData);

      setImages(
        Array.isArray(diaryDetailData.imageResDtoList) &&
          diaryDetailData.imageResDtoList.map((image: ImagesType) => {
            return image.convertImageUrl;
          })
      );

      setIsOn(diaryDetailData.isPublic);

      setIsLike(diaryDetailData.isLike);
    }
  }, [diaryDetailData]);

  useEffect(() => {
    console.log(isOn);
  }, [isOn]);

  return (
    <Suspense fallback={<Spinner />}>
      <Header type="withPrevButton" text={diaryData?.title} />
      {isLoading ? (
        <Modal
          title="추억 일기를
        만들고 있어요"
          content="30초정도 걸리니 조금만 기다려주세요!"
          isVisible={isLoading}
          setIsVisible={setIsLoading}
        >
          <Spinner />
        </Modal>
      ) : (
        <Modal
          title="추억일기가
          완성되었어요!"
          isVisible={isSuccess}
          setIsVisible={setIsLoading}
        >
          <BaseButton buttonType="abled" width="100%" onClick={() => window.location.reload()}>
            일기 확인하기
          </BaseButton>
        </Modal>
      )}
      <S.TogetherWrapper>
        <ImagePagination images={images} isLogin={false} />
        <S.MainSectionWrapper>
          <S.ContentTitleWrapper>
            <S.TitleWrapper>
              <S.NameText>{diaryData?.title}</S.NameText>
              <S.DateText>{formatDate(new Date())}</S.DateText>
            </S.TitleWrapper>
            {from === "myCollection" && (
              <S.VoiceButton>
                <VoiceButtonIcon />
                <S.VoiceButtonText>내 목소리 듣기</S.VoiceButtonText>
              </S.VoiceButton>
            )}
          </S.ContentTitleWrapper>

          <S.Content>{diaryData?.content}</S.Content>
          <S.NameText>핵심 단어</S.NameText>
          <S.TagWrapper>
            {diaryData?.hashtags.map((tag: string, index: number) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </S.TagWrapper>
        </S.MainSectionWrapper>
        {from === "writeDiary" && (
          <S.ButtonWrapper>
            <BaseButton
              buttonType="white"
              width="50%"
              onClick={() => {
                setIsLoading(true);
                reCreateDiary({
                  diaryId: diaryData?.diaryId as number,
                  voiceText: diary.voiceText
                });
              }}
            >
              다시 만들기
            </BaseButton>
            <BaseButton buttonType="abled" width="50%" onClick={() => window.location.assign("/")}>
              저장하기
            </BaseButton>
          </S.ButtonWrapper>
        )}
        {from === "myCollection" && (
          <>
            <S.ToggleButtonWrapper>
              <S.ToggleButtonText>함께보기에 공유하기</S.ToggleButtonText>
              <div
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              >
                <ToggleButton isOn={isOn} />
              </div>
            </S.ToggleButtonWrapper>

            <Modal {...ModalProps}>
              <BaseButton
                buttonType="abled"
                width="100%"
                onClick={() => diaryData?.diaryId && handleShareDiary(diaryData?.diaryId)}
              >
                {isOn ? "나만보기" : "공유하기"}
              </BaseButton>
            </Modal>
          </>
        )}
        {from === "otherCollection" && (
          <S.ToggleButtonWrapper>
            <S.LikeButtonWrapper>
              <button
                onClick={async () => {
                  isLike && diaryData?.diaryId
                    ? await deleteLike(diaryData?.diaryId as number)
                    : await postLike(diaryData?.diaryId as number);
                  await refetch();
                }}
              >
                {diaryData?.isLike ? <LikeButtonAbled /> : <LikeButtonDisabled />}
              </button>
              좋아요 {diaryData?.likeCount}개
            </S.LikeButtonWrapper>
          </S.ToggleButtonWrapper>
        )}
      </S.TogetherWrapper>
    </Suspense>
  );
};

export default DiaryDetail;
