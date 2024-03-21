import styled from "@emotion/styled";

export const OnBoradingWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;

  gap: 7.681px;
  width: 100vw;
  height: 100%;
  padding-top: 279px;
  background-color: ${({ theme }) => theme.colors.pink[400]};
  position: absolute;
  top: 0;
`;
