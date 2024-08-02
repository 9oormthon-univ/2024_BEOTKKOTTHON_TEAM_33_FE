import * as S from "./SeniorCenterMap.styles";
import KakaoMap from "@components/KakaoMap/KakaoMap";
import tmpData from "../tmpData.json";

const SeniorCenterMap = () => {
  return (
    <S.MapContainer>
      <KakaoMap products={tmpData.products} />
    </S.MapContainer>
  );
};

export default SeniorCenterMap;
