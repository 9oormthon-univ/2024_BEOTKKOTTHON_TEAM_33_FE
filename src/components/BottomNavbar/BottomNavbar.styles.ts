import styled from "@emotion/styled";

export const BottomNavbarWrapper = styled.div`
  width: 100%;
  height: 90px;
  flex-shrink: 0;

  border-radius: 12px 12px 0px 0px;
  background: #fff;
  box-shadow: 0px -2px 16px 0px rgba(0, 0, 0, 0.16);

  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  user-select: none;
  z-index: 999;
  max-width: 768px;
  left: 50%;
  transform: translateX(-50%);

  & .active {
    color: var(--black-000, #151515);
  }
`;
