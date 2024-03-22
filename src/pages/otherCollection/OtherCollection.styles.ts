import styled from "@emotion/styled";

interface HeaderWrapperProps {
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
