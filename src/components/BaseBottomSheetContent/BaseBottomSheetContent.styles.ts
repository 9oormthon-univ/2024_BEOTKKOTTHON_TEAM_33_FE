import styled from "@emotion/styled";

export const BaseBottomSheetContentWrapper = styled.div`
  width: 100%;
  height: 220px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MainTitle = styled.p`
  color: #000;
  text-align: center;

  ${({ theme }) => theme.text.heading3};

  margin-top: 28px;
  margin-bottom: 4px;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;

  ${({ theme }) => theme.text.body3_reg};

  margin-bottom: 21px;
`;
