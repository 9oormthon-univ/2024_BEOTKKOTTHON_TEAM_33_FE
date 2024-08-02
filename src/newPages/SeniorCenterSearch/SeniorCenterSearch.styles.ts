import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SearchBarWrapper = styled.div`
  position: absolute;
  top: 63px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 63%;
  height: 44px;
  flex-shrink: 0;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;

  margin-left: 8px;

  padding: 19px;
`;

export const SearchBtn = styled.button`
  color: #151515;

  ${({ theme }) => theme.text.body1_bold}

  margin-left: 10px;
`;

export const ListWrapper = styled.div`
  margin-top: 96px;

  width: 100%;
  height: calc(100% - 96px);

  overflow: scroll;
`;

export const ExpressionWrapper = styled.div`
  position: absolute;
  top: 175px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  gap: 44px;
`;

export const AlertMsg = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;

  ${({ theme }) => theme.text.body1_reg};

  white-space: pre-wrap;
`;

export const ProductsWrapper = styled.div`
  position: absolute;
  top: 95px;
  width: 100%;
`;
