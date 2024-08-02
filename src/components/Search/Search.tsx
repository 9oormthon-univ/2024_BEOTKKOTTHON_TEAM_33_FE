import useSearch from "@hooks/useSearch";
import * as S from "../KakaoMap/KakaoMap.styles";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const { position, isMapMoved, setMapMoved } = useSearch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    if (!position) return;

    searchParams.set("swx", position.smallX.toString());
    searchParams.set("swy", position.smallY.toString());
    searchParams.set("nex", position.bigX.toString());
    searchParams.set("ney", position.bigY.toString());
    setSearchParams(searchParams);
    setMapMoved(false);
  };

  return isMapMoved && <S.SearchButton onClick={handleSearch}>현재 지도에서 재검색</S.SearchButton>;
};

export default Search;
