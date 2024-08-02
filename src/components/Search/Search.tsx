import useSearch from "@hooks/useSearch";
import * as S from "../KakaoMap/KakaoMap.styles";
import { useSearchParams } from "react-router-dom";
import { MapCenter } from "@components/KakaoMap/KakaoMap.types";
import RetryIcon from "@assets/icons/retryIcon.svg?react";
import { isRefetched } from "@stores/searchStore";
import { useRecoilState } from "recoil";

interface SearchProps {
  setMapCenter: React.Dispatch<React.SetStateAction<MapCenter | undefined>> | undefined;
}

const Search = ({ setMapCenter }: SearchProps) => {
  const { position, isMapMoved, setMapMoved } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setIsRefetched] = useRecoilState(isRefetched);

  const handleSearch = () => {
    if (!position) return;

    searchParams.set("swx", position.smallX.toString());
    searchParams.set("swy", position.smallY.toString());
    searchParams.set("nex", position.bigX.toString());
    searchParams.set("ney", position.bigY.toString());
    setSearchParams(searchParams);
    setMapMoved(false);
    if (setMapCenter) {
      setMapCenter({
        lat: (position.smallX + position.bigX) / 2,
        lng: (position.smallY + position.bigY) / 2
      });
      setIsRefetched(true);
    }
  };

  return (
    isMapMoved && (
      <S.SearchButton onClick={() => handleSearch()}>
        <RetryIcon />
        <S.SearchBtnTxt>이 위치에서 경로당 찾기</S.SearchBtnTxt>
      </S.SearchButton>
    )
  );
};

export default Search;
