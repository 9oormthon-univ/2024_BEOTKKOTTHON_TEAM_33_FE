import SearchBar from "@components/SearchBar/SearchBar";
import { ProductType } from "@components/KakaoMap/KakaoMap.types";
import ProductCard from "@components/ProductCard/ProductCard";
import * as S from "./SeniorCenterList.styles";
import Spinner from "@components/Spinner/Spinner";
import useAroundSeniorCenter from "@hooks/useAroundSeniorCenter";
import { useEffect, useState } from "react";
import { isRefetched } from "@stores/searchStore";
import { useRecoilState } from "recoil";

interface Position {
  lat: number;
  lng: number;
}

const SeniorCenterList = () => {
  const [mapCenter, setMapCenter] = useState<Position>();
  const [_isRefetched] = useRecoilState(isRefetched);

  const { data, error, isFetching, refetch } = useAroundSeniorCenter(
    mapCenter?.lat as number,
    mapCenter?.lng as number
  );

  if (error) console.log(error);

  useEffect(() => {
    if (!_isRefetched && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setMapCenter(newPosition);
      });
    }
  }, []);

  useEffect(() => {
    if (mapCenter) refetch();
  }, [mapCenter]);

  return (
    <S.ListContainer>
      <SearchBar />
      {data?.result?.map((data: ProductType) => (
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
