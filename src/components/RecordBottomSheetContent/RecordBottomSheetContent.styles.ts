import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TextLayout = css`
  text-align: center;
  cursor: pointer;
`;

export const BottomSectionWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;

  margin-top: 20px;
`;

export const CancelText = styled.p`
  ${TextLayout};

  color: ${({ theme }) => theme.colors.gray[500]};

  ${({ theme }) => theme.text.body2_reg};
`;

export const DoneText = styled.p`
  ${TextLayout};

  color: ${({ theme }) => theme.colors.gray[500]};

  ${({ theme }) => theme.text.body2_bold};
`;
