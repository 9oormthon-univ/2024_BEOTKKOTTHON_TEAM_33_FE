import { Dispatch, SetStateAction } from "react";
import * as S from "../KakaoMap/KakaoMap.styles";
import { CustomOverlayMap, useMap } from "react-kakao-maps-sdk";
import { ProductType } from "../KakaoMap/KakaoMap.types";

interface ProductMarkersProps {
  products: ProductType[];
  selectedProductId: number;
  setSelectedProductId: Dispatch<SetStateAction<number>>;
}

export const ProductsMarkers = ({
  products,
  selectedProductId,
  setSelectedProductId
}: ProductMarkersProps) => {
  const map = useMap();

  const handleSelect = (product: ProductType) => {
    const { latitude, longitude } = product;
    setSelectedProductId(product.id);
    map.panTo(new kakao.maps.LatLng(latitude, longitude));
  };

  return products.map((product) => (
    <CustomOverlayMap key={product.id} position={{ lat: product.latitude, lng: product.longitude }}>
      <S.Pin
        data-selected={selectedProductId === product.id ? "true" : "false"}
        onClick={() => handleSelect(product)}
      >
        {product.facility_name.slice(0, 7) + "..."}
      </S.Pin>
    </CustomOverlayMap>
  ));
};
