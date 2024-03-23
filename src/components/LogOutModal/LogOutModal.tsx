import styled from "@emotion/styled";
import { BottomModalProps } from "./LogOutModal.types";
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
`;

const ModalContent = styled.div`
  position: fixed;
  right: 16px;
  top: 101px;
  width: 120px;
  height: 48px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
  font-style: ${({ theme }) => theme.text.body1_bold};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;

const LogOutModal = ({ isOpen, onClose }: BottomModalProps) => {
  // 나중에 여기서 로그아웃 연동
  const checkClick = () => {
    console.log("클릭");
  };
  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={onClose}>
        <ModalContent onClick={checkClick}>로그아웃</ModalContent>
      </ModalOverlay>
    </>
  );
};

export default LogOutModal;
