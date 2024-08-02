import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface HeaderWrapperProps {
  isSticky: boolean;
}
export const CollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-color: white;
  overflow-y: scroll;
  padding-top: 3px;
  padding-bottom: 100px;
`;

export const DateWrapper = styled.div`
  width: 100%;
  max-width: 780px;
`;

export const MonthText = styled.span`
  font-style: ${({ theme }) => theme.text.body2_bold};
`;

export const ChooseText = styled.span`
  font-style: ${({ theme }) => theme.text.detail1_reg};
  margin-left: 4px;
`;

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  width: 100%;
  max-width: 780px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "relative")};
  top: ${({ isSticky }) => (isSticky ? "0" : "auto")};
  z-index: 1000; /* 다른 컨텐츠 위에 올라가도록 설정 */
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HomeContentWrapper = css`
  width: 100%;
  max-width: 780px;
  height: auto;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  ${HomeContentWrapper}
  padding-bottom: 110px;
  padding-top: 60px;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 375px;
  position: fixed;
  top: 96px;
  background-color: white;
`;

export const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 10px 0;
  border: none;
  border-bottom: ${({ active }) => (active ? "3px solid #000000" : "none")};
  color: var(--Color-Styles-black-000, #151515);
  text-align: center;

  /* Text Styles/body1-bold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */

  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #ffffff;
  }
`;

export const StyledIconContainer = styled.div`
  position: fixed;
  bottom: 110px; /* BottomNavbarWrapper의 height(90px) + 20px */
  right: 16px;
  z-index: 3000; /* BottomNavbarWrapper보다 앞에 오도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const IconWrapper = styled.div`
  margin-bottom: 8px;
  cursor: pointer;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 21, 21, 0.5);
  z-index: 2000;
`;
