import styled from "@emotion/styled";

export const BottomNavButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  ${({ theme }) => theme.text.detail2_reg};
`;
