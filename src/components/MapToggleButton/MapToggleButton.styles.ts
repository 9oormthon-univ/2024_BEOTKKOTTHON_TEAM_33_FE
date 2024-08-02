import styled from "@emotion/styled";

interface ToggleOptionProps {
  isActive: boolean;
}

export const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 88px;
  height: 44px;
  flex-shrink: 0;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;
`;

export const ToggleOption = styled.div<ToggleOptionProps>`
  background-color: ${({ isActive }) => (isActive ? "#32CD32" : "#fff")};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 38px;
  flex-shrink: 0;

  border: none;
  border-radius: 10px;
`;
