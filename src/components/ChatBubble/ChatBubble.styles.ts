import styled from "@emotion/styled";
import { css } from "@emotion/react";

// 스크롤 핸들러 등록해야해서 css말고 div로 잡음
export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  overflow-y: auto;
  max-height: 100vh;
`;

//말풍선 공통스타일
export const ChatBubbleWrapper = css`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  max-width: 230px;
  width: auto;
  word-wrap: break-word;
  white-space: pre-line;
`;

//내말풍선
export const UserMessageWrapper = styled.div`
  ${ChatBubbleWrapper}
  color: var(--Color-Styles-white-000, #fff);
  border-radius: 16px 0px 16px 16px;
  background: ${({ theme }) => theme.colors.pink[300]};
  align-self: flex-end;
  font-style: ${({ theme }) => theme.text.detail1_reg};
`;

//아이콘+챗봇말풍선 래퍼
export const BotOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  gap: 14px;
`;
//챗봇말풍선
export const BotMessageWrapper = styled.div`
  ${ChatBubbleWrapper}
  border-radius: 0px 16px 16px 16px;
  border: 1px solid var(--Color-Styles-gray-200, #eaecf0);
  font-style: ${({ theme }) => theme.text.detail1_reg};
`;
