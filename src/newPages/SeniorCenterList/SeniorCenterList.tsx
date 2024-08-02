import SearchBar from "@components/SearchBar/SearchBar";
import tmpData from "../tmpData.json";
import { ProductType } from "@components/KakaoMap/KakaoMap.types";
import ProductCard from "@components/ProductCard/ProductCard";
import * as S from "./SeniorCenterList.styles";

const SeniorCenterList = () => {
  return (
    <S.ListContainer>
      <SearchBar />
      {tmpData.products.map((data: ProductType) => (
        <div style={{ padding: "16px" }} key={data.id}>
          <ProductCard selectedProduct={data} />
        </div>
      ))}
      <S.Spacer />
    </S.ListContainer>
  );
};

export default SeniorCenterList;
