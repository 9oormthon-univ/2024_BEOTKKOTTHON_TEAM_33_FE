import styled from "@emotion/styled";

export const TogetherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px 32px 16px;

  height: calc(100% - 116px);

  overflow: scroll;
`;
export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px; /* Adjust the margin to control the space between avatar and title */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  /* TODO: ImagePagination과 겹침 */
  margin-top: 16px;
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const NameText = styled.p`
  color: #000;

  ${({ theme }) => theme.text.heading3};
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  ${({ theme }) => theme.text.body2_reg};
`;

export const VoiceButton = styled.button`
  width: 126px;
  height: 30px;
  flex-shrink: 0;

  border-radius: 8px;
  border: ${({ theme }) => theme.colors.gray[300]} 1px solid;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const VoiceButtonText = styled.p`
  color: #000;
  ${({ theme }) => theme.text.body3_bold};
`;

export const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  margin-top: 4px;
`;

export const Content = styled.p`
  width: 100%;

  color: #000;

  ${({ theme }) => theme.text.body1_reg};

  margin-top: 12px;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  padding: 0 16px 56px 16px;

  background: #fff;
`;

export const ToggleButtonWrapper = styled.div`
  width: 100%;
  height: 64px;
  flex-shrink: 0;

  border-top: 0.5px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
`;

export const ToggleButtonText = styled.p`
  color: #00b207;
  ${({ theme }) => theme.text.detail2_reg};
`;

export const LikeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const ProfileWrapper = styled.div`
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;
