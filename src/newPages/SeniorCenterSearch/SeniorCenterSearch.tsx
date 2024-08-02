import * as S from "./SeniorCenterSearch.styles";
import BackArrow from "@assets/icons/backArrow.svg?react";
import SmileIcon from "@assets/icons/smileIcon.svg?react";
import SadIcon from "@assets/icons/sadIcon.svg?react";
import tmpData from "../tmpData.json";
import ProductCard from "@components/ProductCard/ProductCard";
import { useState } from "react";
import { ProductType } from "@components/KakaoMap/KakaoMap.types";

const SeniorCenterSearch = () => {
  const defaultMsg = "지도를 옮겨서\n가까운 경로당을 찾아보세요";
  const noDataMsg = "검색 결과가 없어요.\n다시 한번 확인해주세요!";

  const [isSearched, setIsSearched] = useState(false);

  return (
    <>
      <S.SearchBarWrapper>
        <BackArrow />
        <S.SearchBar placeholder="검색어를 입력하세요" />
        <S.SearchBtn onClick={() => setIsSearched(true)}>검색</S.SearchBtn>
      </S.SearchBarWrapper>
      <S.ListWrapper>
        {!isSearched ? (
          <S.ExpressionWrapper>
            <SmileIcon />
            <S.AlertMsg>{defaultMsg}</S.AlertMsg>
          </S.ExpressionWrapper>
        ) : isSearched && tmpData.products.length === 0 ? (
          <S.ExpressionWrapper>
            <SadIcon />
            <S.AlertMsg>{noDataMsg}</S.AlertMsg>
          </S.ExpressionWrapper>
        ) : (
          tmpData.products.map((data: ProductType) => (
            <div key={data.id} style={{ padding: "16px" }}>
              <ProductCard selectedProduct={data} />
            </div>
          ))
        )}
      </S.ListWrapper>
    </>
  );
};

export default SeniorCenterSearch;
