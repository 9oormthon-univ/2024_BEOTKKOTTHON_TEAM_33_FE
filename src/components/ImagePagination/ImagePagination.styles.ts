import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
`;

export const LoginText = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
  font-style: ${({ theme }) => theme.text.heading4};
  text-align: center;
`;

export const DiaryWrapper = styled.div`
  display: flex;
  align-self: center;
  width: 288px;
  height: 288px;
  margin-bottom: 16px;
  flex-direction: column;
`;

export const DotContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: -16px;
`;
