import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BaseButtonStylesProps } from "./BaseButton.types";

const ButtonLayout = css`
  height: 60px;
  flex-shrink: 0;
  border-radius: 16px;
  color: var(--white-000, #fff);
  text-align: center;
`;

const DisabledButtonLayout = css`
  ${ButtonLayout}
  cursor: not-allowed;
`;

export const AbledButton = styled.button<BaseButtonStylesProps>`
  ${ButtonLayout}

  width: ${({ width }) => width || "288px"};
  background: ${({ theme }) => theme.colors.pink[400]};
  ${({ theme }) => theme.text.body1_bold};
`;

export const DisabledButton = styled.button<BaseButtonStylesProps>`
  ${DisabledButtonLayout}

  width: ${({ width }) => width || "288px"};
  background: ${({ theme }) => theme.colors.gray[300]};
  ${({ theme }) => theme.text.body1_bold};
`;
