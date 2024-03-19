import styled from "@emotion/styled";
import { css } from "@emotion/react";

const HomeContentWrapper = css`
  width: 100%;
  max-width: 780px;
  height: auto;
`;

export const HomeContent = styled.div`
  ${HomeContentWrapper}
  padding-top:68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const HomeTextBox = styled.div`
  font-style: ${({ theme }) => theme.text.heading4};
  color: var(--Color-Styles-black-000, #151515);
  text-align: center;
`;
