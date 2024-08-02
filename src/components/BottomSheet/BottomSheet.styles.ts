import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Background = styled.div`
  position: fixed;
  z-index: 1800;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--Color-Styles-bg-500, rgba(21, 21, 21, 0.3));
`;

export const BottemSheetWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  max-width: 780px;
  z-index: 1900;
  background-color: #fff;
  border-radius: 15px 15px 0px 0px;
  box-shadow: ${({ theme }) => theme.shadow.dropshadow};

  height: 220px;
`;
