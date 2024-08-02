import styled from "@emotion/styled";
import Friend from "@assets/icons/친구맺기.svg";
import Like from "@assets/icons/ion_heart-outline.svg";
import Chat from "@assets/icons/ion_chatbubble-ellipses-outline.svg";
import { NewDiaryCardProps } from "@components/OtherDiaryCard/OtherDiaryCard.types";
import { useNavigate } from "react-router-dom";

const CardWrapper = styled.div`
  width: 375px;
  /* border-radius: 12px; */
  background: var(--Color-Styles-white-000, #fff);
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-family: "Arial, sans-serif";
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const FriendButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

const Photo = styled.div<{ url: string }>`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  margin-bottom: 12px;
`;

const Content = styled.div`
  padding: 10px 0;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 15px;
  color: #000;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 343px;
  height: 46px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  padding-top: 10px;
  padding-bottom: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #abadb2;
`;

const Icon = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

const Date = styled.span`
  margin-left: auto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #abadb2;
`;

const PostComponent = ({
  id,
  title,
  userName,
  likeNumber,
  photoUrl,
  content,
  createAt
}: NewDiaryCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/diaryDetail?from=otherCollection&diaryId=${id}`);
  };
  return (
    <CardWrapper>
      <Header>
        <Avatar />
        <UserName>{userName}</UserName>
        <FriendButton>
          <img src={Friend} />
        </FriendButton>
      </Header>
      <Photo url={photoUrl} onClick={handleClick} />
      <Content>
        <Title>{title}</Title>
        <Description>{content}</Description>
      </Content>
      <Footer>
        <IconWrapper>
          <Icon>
            <img src={Like} />
          </Icon>
          {likeNumber}
        </IconWrapper>
        <IconWrapper>
          <Icon>
            <img src={Chat} />
          </Icon>
          3
        </IconWrapper>
        <Date>{createAt}</Date>
      </Footer>
    </CardWrapper>
  );
};

export default PostComponent;
