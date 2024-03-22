import styled from "@emotion/styled";
import { ToggleButtonProps } from "./ToggleButton.types";

export const ToggleButtonWrapper = styled.div<ToggleButtonProps>`
  display: flex;
  width: 48px;
  height: 24px;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 30px;
  background-color: ${({ isOn, theme }) =>
    isOn ? theme.colors.pink.logo : theme.colors.gray[300]};

  .handle {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 30px;
  }
`;
