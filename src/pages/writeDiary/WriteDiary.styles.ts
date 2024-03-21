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
