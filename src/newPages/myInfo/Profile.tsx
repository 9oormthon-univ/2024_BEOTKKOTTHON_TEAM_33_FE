/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

interface ProfileProps {
  name: string;

  photoUrl: string;
}

const Profile = ({ name, photoUrl }: ProfileProps) => {
  return (
    <ProfileContainer>
      <Avatar>
        <img src={photoUrl} />
      </Avatar>
      <Name>{name}</Name>
    </ProfileContainer>
  );
};

export default Profile;
