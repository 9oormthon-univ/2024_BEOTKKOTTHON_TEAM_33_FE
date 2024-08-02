import * as S from "./SearchBar.styles";
import SearchIcon from "@assets/icons/searchIcon.svg?react";
import MapToggleButton from "@components/MapToggleButton/MapToggleButton";

const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.InputWrapper>
        <SearchIcon />
        <S.Input placeholder={"검색어를 입력해주세요"} />
      </S.InputWrapper>
      <MapToggleButton />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
