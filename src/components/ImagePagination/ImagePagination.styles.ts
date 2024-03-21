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
