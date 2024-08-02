import styled from "@emotion/styled";

export const CardContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  width: calc(100% - 32px);
`;

export const CardWrapper = styled.div`
  position: relative;
  height: 167px;
  flex-shrink: 0;

  background: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  cursor: pointer;
`;

export const MapCardWrapper = styled.div`
  position: relative;
  height: 167px;
  flex-shrink: 0;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);

  padding: 16px;
`;

export const ProductTitle = styled.p`
  color: #151515;

  ${({ theme }) => theme.text.heading4};
`;

export const AddressWrapper = styled.div`
  margin-top: 4px;
`;

export const Address = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  ${({ theme }) => theme.text.body2_reg};
`;

export const SubAddress = styled.p`
  color: ${({ theme }) => theme.colors.gray[500]};

  ${({ theme }) => theme.text.detail1_reg};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 11px;
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoTitle = styled.p`
  color: #151515;

  ${({ theme }) => theme.text.body1_bold};
`;

export const InfoContent = styled.p`
  color: #151515;

  ${({ theme }) => theme.text.body1_reg};
`;

export const FriendBtn = styled.button`
  display: flex;
  width: 102px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 8px;
  background: #00b207;

  position: absolute;
  top: 16px;
  right: 16px;
`;

export const FriendBtnText = styled.p`
  color: #fff;
  ${({ theme }) => theme.text.body1_reg};
`;

export const FriendBtnBoldTxt = styled.p`
  color: #fff;
  ${({ theme }) => theme.text.body1_bold};
`;
