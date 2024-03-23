import styled from "@emotion/styled";

// 스크롤 핸들러 등록해야해서 css말고 div로 잡음
export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  overflow-y: auto;
  max-height: 100vh;
`;

export const BaseSheetWrapper = styled.div`
  background: var(--Color-Styles-bg-500, rgba(21, 21, 21, 0.3));
  z-index: 0;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
export const TalkStartButton = styled.div<{ isPressed: boolean }>`
  /* margin-top: 15px; */
  width: auto;
  height: 36px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 20px;
  text-align: center;
  border: 1px solid var(--Color-Styles-gray-200, #eaecf0);
  /* background: #fafafa; */
  font-style: ${({ theme }) => theme.text.detail1_reg};
  color: ${({ isPressed }) => (isPressed ? "white" : "#5C5E62")};
  background-color: ${({ isPressed }) =>
    isPressed ? "#FF5781" : "white"}; /* 터치 중이면 빨간색, 그렇지 않으면 녹색 */
`;
