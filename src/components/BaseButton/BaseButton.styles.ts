import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BaseButtonStylesProps } from "./BaseButton.types";

const ButtonLayout = css`
  height: 60px;
  flex-shrink: 0;
  border-radius: 16px;
  text-align: center;
`;

const DisabledButtonLayout = css`
  ${ButtonLayout}
  cursor: not-allowed;
`;

export const AbledButton = styled.button<BaseButtonStylesProps>`
  ${ButtonLayout}

  width: ${({ width }) => width || "288px"};
  /* background: ${({ theme }) => theme.colors.pink[400]}; */
  background: #00b207;
  color: var(--white-000, #fff);
  ${({ theme }) => theme.text.body1_bold};
`;

export const DisabledButton = styled.button<BaseButtonStylesProps>`
  ${DisabledButtonLayout}

  width: ${({ width }) => width || "288px"};
  background: ${({ theme }) => theme.colors.gray[300]};
  color: var(--white-000, #fff);
  ${({ theme }) => theme.text.body1_bold};
`;

export const WhiteButton = styled.button<BaseButtonStylesProps>`
  ${ButtonLayout}

  width: ${({ width }) => width || "288px"};
  background: #fff;
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body1_bold};
  border: ${({ theme }) => theme.colors.gray[400]} 1px solid;
`;
