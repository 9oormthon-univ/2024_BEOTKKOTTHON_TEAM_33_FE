import styled from "@emotion/styled";
import { css } from "@emotion/react";

const HeaderWrapper = css`
  width: 100%;
  max-width: 780px;
  position: fixed;
  height: 96px;
  top: 0;
  z-index: 1500;
  background-color: white;
`;

export const HeaderWithLogo = styled.div`
  ${HeaderWrapper}
  padding-top: 48px;
  padding: 6px 20px 6px 16px;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const HeaderWithMiddleText = styled.div`
  ${HeaderWrapper}
  padding-top: 48px;
  padding-left: 8px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;

  span {
    color: var(--black-000, #151515);
    font-style: ${({ theme }) => theme.text.heading3};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const TitleText = styled.div`
  color: ${({ theme }) => theme.colors.pink.logo};
  font-family: "Cafe24 Ssurround";
  font-size: 1.72338rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.379px;
`;
