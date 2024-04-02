import styled from "@emotion/styled";
export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
`;

export const ModalContent = styled.div`
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
