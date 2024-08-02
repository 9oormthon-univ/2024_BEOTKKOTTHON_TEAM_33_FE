import useSeniorCenterList from "@hooks/useSeniorCenterList";
import * as S from "./SeniorCenterMap.styles";
import KakaoMap from "@components/KakaoMap/KakaoMap";
import Spinner from "@components/Spinner/Spinner";

const SeniorCenterMap = () => {
  const { data, error, isFetching } = useSeniorCenterList();

  if (error) console.log(error);

  return (
    <S.MapContainer>
      <KakaoMap result={data.results} total_count={data.total_count} />
      {isFetching && <Spinner />}
    </S.MapContainer>
  );
};

export default SeniorCenterMap;
