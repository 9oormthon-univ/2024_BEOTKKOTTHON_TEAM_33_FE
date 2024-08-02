import * as S from "./SeniorCenterMap.styles";
import KakaoMap from "@components/KakaoMap/KakaoMap";
import Spinner from "@components/Spinner/Spinner";
import { useEffect, useState } from "react";
import useAroundSeniorCenter from "@hooks/useAroundSeniorCenter";
import { useLocation } from "react-router-dom";

interface Position {
  lat: number;
  lng: number;
}

const SeniorCenterMap = () => {
  const [mapCenter, setMapCenter] = useState<Position>();
  const query = new URLSearchParams(useLocation().search);
  const latitude = query.get("latitude");
  const longitude = query.get("longitude");

  const { data, error, isFetching, refetch } = useAroundSeniorCenter(
    mapCenter?.lat as number,
    mapCenter?.lng as number
  );

  if (error) console.log(error);

  useEffect(() => {
    if (!latitude && !longitude && navigator.geolocation) {
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
    if (latitude && longitude) setMapCenter({ lat: Number(latitude), lng: Number(longitude) });
  }, [latitude, longitude]);

  useEffect(() => {
    if (mapCenter) refetch();
  }, [mapCenter]);

  return (
    <S.MapContainer>
      <KakaoMap
        result={data?.result}
        total_count={data?.total_count}
        _setMapCenter={setMapCenter}
      />
      {isFetching && <Spinner />}
    </S.MapContainer>
  );
};

export default SeniorCenterMap;
