import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 288px;
  height: 200px;
  border-radius: 12px;
  background: var(--Color-Styles-white-000, #fff);
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 16px;
`;

// wrapper임
export const DiaryTitle = styled.div`
  /* margin: 12px 199px 164px 16px; */
  width: 256px;
  height: 24px;
  /* background-color: aliceblue; */
  color: var(--Color-Styles-black-000, #151515);
  font-style: ${({ theme }) => theme.text.body1_bold};
  /* text-align: start; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.div`
  width: 42px;
  height: 18px;
  /* background-color: aqua; */
  color: var(--Color-Styles-black-000, #151515);
  font-style: ${({ theme }) => theme.text.detail2_reg};
  text-align: center;
  margin-top: 2px;
`;

export const LikeWrapper = styled.div`
  font-style: ${({ theme }) => theme.text.detail2_reg};
  color: ${({ theme }) => theme.colors.pink[500]};
  /* text-align: center; */
`;

export const Like = styled.span`
  margin-left: 4px;
`;

export const Photo = styled.div<{ url: string }>`
  margin-top: 10px;
  width: 254px;
  height: 118px;
  background-color: aliceblue;
  border-radius: 8px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
`;
