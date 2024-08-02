import * as S from "./MapToggleButton.styles";
import ListIcon from "@assets/icons/listIcon.svg?react";
import WhiteListIcon from "@assets/icons/whiteListIcon.svg?react";
import MapIcon from "@assets/icons/mapIcon.svg?react";
import WhiteMapIcon from "@assets/icons/whiteMapIcon.svg?react";
import { useNavigate, useLocation } from "react-router-dom";

const ToggleButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.ToggleButtonContainer>
      <S.ToggleOption
        isActive={location.pathname === "/seniorCenterList"}
        onClick={() => navigate("/seniorCenterList")}
      >
        {location.pathname === "/seniorCenterList" ? <WhiteListIcon /> : <ListIcon />}
      </S.ToggleOption>
      <S.ToggleOption
        isActive={location.pathname === "/seniorCenterMap"}
        onClick={() => navigate("/seniorCenterMap")}
      >
        {location.pathname === "/seniorCenterMap" ? <WhiteMapIcon /> : <MapIcon />}
      </S.ToggleOption>
    </S.ToggleButtonContainer>
  );
};

export default ToggleButton;
