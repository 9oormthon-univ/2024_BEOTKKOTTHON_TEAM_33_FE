import styled from "@emotion/styled";
import { useState } from "react";
import CheckIcon from "@assets/icons/ion_checkmark.svg?react";

interface BottomModalProps {
  isOpen: boolean;
  onClose: () => void;
  setPresentMonth: React.Dispatch<React.SetStateAction<number>>;
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

const BottomModal = ({ isOpen, onClose, setPresentMonth }: BottomModalProps) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(3);
  // const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const handleMonthSelect = (month: number) => {
    setSelectedMonth(month);
    onClose();
    setPresentMonth(month);
  };

  const months = [4, 3, 2, 1];

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={onClose} />
      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          <MonthSelectionTitle>달 선택하기</MonthSelectionTitle>
          {months.map((month, index) => (
            <MonthItem
              key={index}
              isSelected={selectedMonth === month}
              onClick={() => handleMonthSelect(month)}
            >
              2024년 {month}월{selectedMonth === month && <CheckIcon />}
            </MonthItem>
          ))}
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default BottomModal;
