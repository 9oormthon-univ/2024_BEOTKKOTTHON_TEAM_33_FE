import styled from "@emotion/styled";

export const DiaryDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 32px 16px;

  height: calc(100% - 116px);

  overflow: scroll;
`;

export const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const DateText = styled.p`
  ${({ theme }) => theme.colors.gray[400]};
  ${({ theme }) => theme.text.detail2_reg};
`;

export const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  margin-top: 4px;
`;

export const Content = styled.p`
  width: 100%;

  color: #000;

  ${({ theme }) => theme.text.detail1_reg};

  margin-top: 12px;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  padding: 0 16px 56px 16px;

  background: #fff;
`;
