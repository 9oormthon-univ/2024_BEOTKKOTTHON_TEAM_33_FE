import { useState } from "react";
import { Photo } from "./Album.types";
import * as S from "./Album.styles";
import useImages from "@hooks/useImages";
import { toast } from "react-hot-toast";
import BaseButton from "@components/BaseButton/BaseButton";

const Album = () => {
  const vw = window.innerWidth;

  const { data: photos } = useImages();

  const [selectedPhotos, setSelectedPhotos] = useState<Photo[]>([]);

  const isSelected = (photo: Photo): boolean => {
    return selectedPhotos.some((selected) => selected.download_url === photo.download_url);
  };

  const toggleSelection = (photo: Photo): void => {
    if (isSelected(photo)) {
      setSelectedPhotos(
        selectedPhotos.filter((selected) => selected.download_url !== photo.download_url)
      );
    } else {
      if (selectedPhotos.length < 5) setSelectedPhotos([...selectedPhotos, photo]);
      else toast.error("최대 5개의 사진까지 선택할 수 있습니다.");
    }
  };

  const renderBadgeContent = (photo: Photo): number | null => {
    const index = selectedPhotos.findIndex(
      (selected) => selected.download_url === photo.download_url
    );
    return isSelected(photo) ? index + 1 : null;
  };

  return (
    <>
      <S.AlbumContainer>
        {/* TODO: response 객체의 type으로 수정 */}
        {photos.map((photo: any) => (
          <S.PhotoWrapper key={photo.id}>
            <S.Image
              src={photo.download_url}
              onClick={() => toggleSelection(photo)}
              className={isSelected(photo) ? "selected" : ""}
            />
            {renderBadgeContent(photo) ? (
              <>
                <S.SelectedImage onClick={() => toggleSelection(photo)} />
                <S.SelectedBadge>{renderBadgeContent(photo)}</S.SelectedBadge>
              </>
            ) : (
              <S.Badge />
            )}
          </S.PhotoWrapper>
        ))}
      </S.AlbumContainer>
      <S.BaseButtonWrapper width={vw > 768 ? "70%" : "100%"}>
        {/* TODO: 이동 로직 추가 */}
        <BaseButton buttonType="abled" width="100%">
          이 사진으로 할래요
        </BaseButton>
      </S.BaseButtonWrapper>
    </>
  );
};

export default Album;
