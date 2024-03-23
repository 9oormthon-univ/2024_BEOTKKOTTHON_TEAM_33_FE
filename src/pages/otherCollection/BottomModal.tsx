import styled from "@emotion/styled";
import { useState } from "react";
import CheckIcon from "@assets/icons/ion_checkmark.svg?react";

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

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
// `;

const MonthSelectionTitle = styled.div`
  font-style: ${({ theme }) => theme.text.body1_bold};
  width: 100%;
  height: 20%;
`;

const MonthItem = styled.div<{ isSelected: boolean }>`
  margin-top: 10px;
  width: 100%;
  height: 25px;
  /* background-color: aliceblue; */
  font-style: ${({ theme, isSelected }) =>
    isSelected ? theme.text.body2_bold : theme.text.body2_reg};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.pink[500] : theme.colors.gray[600]};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomModal = ({ isOpen, onClose }: BottomModalProps) => {
  const [selectedMonth, setSelectedMonth] = useState<string>("2024년 3월");

  const handleMonthSelect = (month: string) => {
    console.log("Selected month:", month);
    setSelectedMonth(month);
    onClose(); // 모달 닫기
  };

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={onClose} />
      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          {/* <CloseButton onClick={onClose}>Close</CloseButton> */}
          <MonthSelectionTitle>달 선택하기</MonthSelectionTitle>
          <MonthItem
            isSelected={selectedMonth === "2024년 4월"}
            onClick={() => handleMonthSelect("2024년 4월")}
          >
            2024년 4월
            {selectedMonth === "2024년 4월" ? <CheckIcon /> : null}
          </MonthItem>
          <MonthItem
            isSelected={selectedMonth === "2024년 3월"}
            onClick={() => handleMonthSelect("2024년 3월")}
          >
            2024년 3월
            {selectedMonth === "2024년 3월" ? <CheckIcon /> : null}
          </MonthItem>
          <MonthItem
            isSelected={selectedMonth === "2024년 2월"}
            onClick={() => handleMonthSelect("2024년 2월")}
          >
            2024년 2월
            {selectedMonth === "2024년 2월" ? <CheckIcon /> : null}
          </MonthItem>
          <MonthItem
            isSelected={selectedMonth === "2024년 1월"}
            onClick={() => handleMonthSelect("2024년 1월")}
          >
            2024년 1월
            {selectedMonth === "2024년 1월" ? <CheckIcon /> : null}
          </MonthItem>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default BottomModal;
