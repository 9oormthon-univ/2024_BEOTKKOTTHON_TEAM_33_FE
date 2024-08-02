import { useState } from "react";
import * as S from "./MapToggleButton.styles";
import ListIcon from "@assets/icons/listIcon.svg?react";
import WhiteListIcon from "@assets/icons/whiteListIcon.svg?react";
import MapIcon from "@assets/icons/mapIcon.svg?react";
import WhiteMapIcon from "@assets/icons/whiteMapIcon.svg?react";

const ToggleButton = () => {
  const [active, setActive] = useState("map");

  return (
    <S.ToggleButtonContainer>
      <S.ToggleOption isActive={active === "list"} onClick={() => setActive("list")}>
        {active === "list" ? <WhiteListIcon /> : <ListIcon />}
      </S.ToggleOption>
      <S.ToggleOption isActive={active === "map"} onClick={() => setActive("map")}>
        {active === "map" ? <WhiteMapIcon /> : <MapIcon />}
      </S.ToggleOption>
    </S.ToggleButtonContainer>
  );
};

export default ToggleButton;
