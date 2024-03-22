import styled from "@emotion/styled";

export const TabBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 14px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const TabButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`;

export const MiddleTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnderLine = styled.div`
  height: 2px;
  align-self: stretch;

  background: var(--Color-Styles-black-000, #151515);
`;

export const BoldText = styled.p`
  color: var(--Color-Styles-black-000, #151515);
  text-align: center;

  ${({ theme }) => theme.text.body1_bold};
`;

export const NormalText = styled.p`
  color: ${({ theme }) => theme.colors.gray[300]};
  text-align: center;

  ${({ theme }) => theme.text.body1_bold};
`;

export const DiaryDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0 0 16px;

  height: calc(100% - 138px);

  overflow-x: hidden;
  overflow-y: scroll;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 120%;

  margin-left: 20%;
  margin-bottom: 16px;
`;

export const CategoryTitle = styled.p`
  color: #000 ${({ theme }) => theme.text.body3_bold};
`;

export const CategoryImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8px;
`;

export const CategoryImage = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;

  border-radius: 8px;

  object-fit: cover;
`;
