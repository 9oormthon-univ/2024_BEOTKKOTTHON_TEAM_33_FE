import { motion } from "framer-motion";
import { useState } from "react";
import * as S from "./ToggleButton.styles";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <S.ToggleButtonWrapper isOn={isOn} onClick={() => setIsOn(!isOn)}>
      <motion.div
        className="handle"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      />
    </S.ToggleButtonWrapper>
  );
};

export default ToggleButton;
