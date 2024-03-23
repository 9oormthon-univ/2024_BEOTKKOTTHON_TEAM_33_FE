import styled from "@emotion/styled";
import { RecordBarStylesProps } from "./RecordBar.types";

export const RecordBarWrapper = styled.div<RecordBarStylesProps>`
  width: 100%;
  height: 51px;
  flex-shrink: 0;

  border-radius: 12px;
  background: ${({ barType, theme }) =>
    barType === "beforeRecord" ? theme.colors.gray[100] : theme.colors.pink[300]};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 12px;
  margin-top: 20px;
`;

export const LottieWrapper = styled.div<RecordBarStylesProps>`
  width: 100%;
  margin-left: ${({ barType }) => (barType === "afterRecord" ? "0" : "30px")};
`;

export const TimerText = styled.p<RecordBarStylesProps>`
  color: ${({ barType }) => (barType === "beforeRecord" ? "#000" : "#fff")};
  text-align: center;

  ${({ theme }) => theme.text.body3_reg};
`;
