import styled from "@emotion/styled";

export const SearchBarContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 33px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;

  display: flex;
  padding: 0 16px;
  gap: 5px;
`;

export const InputWrapper = styled.div`
  width: calc(100% - 88px);
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;

  gap: 3px;
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;

  border: none;
  border-radius: 12px;

  color: ${({ theme }) => theme.colors.gray[400]};

  ${({ theme }) => theme.text.body1_bold};
`;
