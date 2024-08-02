import * as S from "./SeniorCenter.styles";
import KakaoMap from "@components/KakaoMap/KakaoMap";
import tmpData from "./tmpData.json";

const SeniorCenter = () => {
  return (
    <S.MapContainer>
      <KakaoMap products={tmpData.products} />
    </S.MapContainer>
  );
};

export default SeniorCenter;
