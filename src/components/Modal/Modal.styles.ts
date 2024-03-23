import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 900;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 270px;
  background-color: #fff;
  border-radius: 20px;
  padding: 36px;
  text-align: center;
  white-space: pre-line;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleText = styled.div`
  color: #000;

  text-align: center;

  ${({ theme }) => theme.text.heading3}
`;

export const ContentText = styled.div`
  color: #000;

  text-align: center;

  ${({ theme }) => theme.text.detail1_reg}
`;

export const CancelTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CancelText = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;

  ${({ theme }) => theme.text.body1_bold}
`;

export const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
  margin-bottom: 16px;
`;
