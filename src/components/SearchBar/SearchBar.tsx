import * as S from "./SearchBar.styles";
import SearchIcon from "@assets/icons/searchIcon.svg?react";
import MapToggleButton from "@components/MapToggleButton/MapToggleButton";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <S.SearchBarContainer>
      <S.InputWrapper>
        <SearchIcon />
        <S.Input
          placeholder={"검색어를 입력해주세요"}
          onClick={() => navigate("/seniorCenterSearch")}
        />
      </S.InputWrapper>
      <MapToggleButton />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
