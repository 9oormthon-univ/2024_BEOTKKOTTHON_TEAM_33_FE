import { useState, useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";

const MyInfo = () => {
  const [userInfo, setUserInfo] = useState({ name: "", photoUrl: "" });

  useEffect(() => {
    const accessToken = sessionStorage.getItem("kakaoAccessToken");
    if (accessToken) {
      axios({
        method: "get",
        url: "https://kapi.kakao.com/v2/user/me",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then((response) => {
          const { nickname, profile_image_url } = response.data.kakao_account.profile;
          console.log(response.data.kakao_account.profile);
          setUserInfo({ name: nickname, photoUrl: profile_image_url });
          console.log(userInfo);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div>
      <Profile name={userInfo.name} photoUrl={userInfo.photoUrl} />
    </div>
  );
};

export default MyInfo;
