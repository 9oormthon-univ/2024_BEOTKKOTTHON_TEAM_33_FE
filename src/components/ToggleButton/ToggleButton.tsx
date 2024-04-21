import { motion } from "framer-motion";
import * as S from "./ToggleButton.styles";

const ToggleButton = ({ isOn }: { isOn: boolean }) => {
  return (
    <S.ToggleButtonWrapper isOn={isOn}>
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
