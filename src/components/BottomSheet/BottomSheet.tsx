import * as S from "./BottomSheet.styles";
import { AnimatePresence } from "framer-motion";
import { BottomSheetProps } from "./BottomSheet.types";

const BottomSheet = ({ isVisible, setIsVisible, children }: BottomSheetProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <S.Background
            onClick={() => {
              setIsVisible(false);
            }}
          />
          <S.BottemSheetWrapper
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "50%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </S.BottemSheetWrapper>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
