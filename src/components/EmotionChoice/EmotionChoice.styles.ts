import styled from "@emotion/styled";

export const EmotionButton = styled.div<{ width: string; active: boolean }>`
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
  color: ${(props) => (props.active ? "white" : "#5C5E62")};
  background-color: ${(props) => (props.active ? "#FF5781" : "white")};
`;

export const EmotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;
