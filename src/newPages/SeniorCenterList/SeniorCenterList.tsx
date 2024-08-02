import SearchBar from "@components/SearchBar/SearchBar";
import { ProductType } from "@components/KakaoMap/KakaoMap.types";
import ProductCard from "@components/ProductCard/ProductCard";
import * as S from "./SeniorCenterList.styles";
import useSeniorCenterList from "@hooks/useSeniorCenterList";
import Spinner from "@components/Spinner/Spinner";

const SeniorCenterList = () => {
  const { data, error, isFetching } = useSeniorCenterList();

  if (error) console.log(error);

  return (
    <S.ListContainer>
      <SearchBar />
      {data.results.map((data: ProductType) => (
        <div style={{ padding: "16px" }} key={data.id}>
          <ProductCard selectedProduct={data} />
        </div>
      ))}
      <S.Spacer />
      {isFetching && <Spinner />}
    </S.ListContainer>
  );
};

export default SeniorCenterList;
