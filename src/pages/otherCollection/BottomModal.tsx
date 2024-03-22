import styled from "@emotion/styled";

interface BottomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 200px;
  border-radius: 16px 16px 0px 0px;
  background-color: white;
  transition: bottom 0.3s ease-in-out;
  z-index: 100;
`;

const ModalContent = styled.div`
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const MonthSelectionTitle = styled.div`
  font-style: ${({ theme }) => theme.text.body1_bold};
  width: 100%;
  height: 20%;
`;

const MonthItem = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 25px;
  /* background-color: aliceblue; */
  font-style: ${({ theme }) => theme.text.body2_reg};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const BottomModal = ({ isOpen, onClose }: BottomModalProps) => {
  const handleMonthSelect = (month: string) => {
    // 선택한 달에 대한 동작을 수행할 수 있음
    console.log("Selected month:", month);
    onClose(); // 모달 닫기
  };

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={onClose} />
      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          <CloseButton onClick={onClose}>Close</CloseButton>
          <MonthSelectionTitle>달 선택하기</MonthSelectionTitle>
          <MonthItem onClick={() => handleMonthSelect("2024년 4월")}>2024년 4월</MonthItem>
          <MonthItem onClick={() => handleMonthSelect("2024년 3월")}>2024년 3월</MonthItem>
          <MonthItem onClick={() => handleMonthSelect("2024년 2월")}>2024년 2월</MonthItem>
          <MonthItem onClick={() => handleMonthSelect("2024년 1월")}>2024년 1월</MonthItem>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default BottomModal;
