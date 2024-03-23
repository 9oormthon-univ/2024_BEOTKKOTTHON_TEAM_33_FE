import * as S from "./Modal.styles";
import ModalPortal from "./ModalPortal";
import { AnimatePresence } from "framer-motion";
import { ModalProp } from "./Modal.types";

const Modal = ({
  title,
  content,
  isVisible,
  setIsVisible,
  isCancelTextExist,
  children
}: ModalProp) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <ModalPortal>
          <S.ModalBackground
            onClick={() => {
              setIsVisible(false);
            }}
          />
          <S.ModalWrapper
            initial={{ y: "-70%", x: "-50%", opacity: 0 }}
            animate={{ y: "-50%", opacity: 1 }}
            exit={{ y: "0%", opacity: 0 }}
          >
            <S.TitleText>{title}</S.TitleText>
            <S.ContentText> {content}</S.ContentText>
            <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
            {isCancelTextExist && (
              <S.CancelTextWrapper
                onClick={() => {
                  setIsVisible(false);
                }}
              >
                취소
              </S.CancelTextWrapper>
            )}
          </S.ModalWrapper>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
