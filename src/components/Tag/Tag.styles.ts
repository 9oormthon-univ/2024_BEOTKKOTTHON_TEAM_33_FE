import styled from "@emotion/styled";

export const TagWrapper = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  border: ${({ theme }) => theme.colors.gray[200]} 1px solid;
  background: #fff;
`;

export const TagText = styled.p`
  color: #000;

  ${({ theme }) => theme.text.body3_reg};
`;
