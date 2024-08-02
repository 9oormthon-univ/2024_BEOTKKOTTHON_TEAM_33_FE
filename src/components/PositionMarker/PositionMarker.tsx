import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { UserPositionType } from "../KakaoMap/KakaoMap.types";
import PositionIcon from "@assets/icons/positionIcon.svg?react";

interface PositionMarkerProps {
  position: UserPositionType;
}

export const PositionMarker = ({ position: { lat, lng, isLoading } }: PositionMarkerProps) => {
  if (lat && lng) {
    return (
      <div>
        {!isLoading && (
          <CustomOverlayMap position={{ lat, lng }}>
            <PositionIcon />
          </CustomOverlayMap>
        )}
      </div>
    );
  }
};
