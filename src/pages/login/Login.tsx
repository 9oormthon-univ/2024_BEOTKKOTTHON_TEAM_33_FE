import { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import ImagePagination from "@components/ImagePagination/ImagePagination";
import LoginBtn from "@assets/icons/kakao_login_large_wide.png";
import axios from "axios";
import image1 from "@assets/icons/Voice Activated Device.jpg";
import image2 from "@assets/icons/Users Network.jpg";
import image3 from "@assets/icons/Sending Receiving Texts Messages.jpg";

const images = [image1, image2, image3];

const Login = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [idToken, setIdToken] = useState(false);
  const navigate = useNavigate();
  var params = new URL(document.URL).searchParams;
  var code = params.get("code");
  useEffect(() => {
    if (code) {
      // 카카오에 post(code를 통해 각종 토큰 받음)
      axios({
        method: "post",
        url: "https://kauth.kakao.com/oauth/token",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        // post 보낼 데이터
        data: {
          code: code,
          client_id: "e1b1aebac9030ea946e773bb00c46e30",
          grant_type: "authorization_code",
          redirect_uri: "http://localhost:5173/login"
        }
      })
        .then((response) => {
          console.log("id_token:" + response.data.id_token);
          setIdToken(response.data.id_token);
          sessionStorage.setItem("kakaoAccessToken", response.data.access_token);
          console.log("카카오엑세스토큰:" + response.data.access_token);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [code]);
  // 백엔드한테 post
  useEffect(() => {
    if (idToken) {
      axios
        .post(import.meta.env.VITE_LOGIN_URL, {
          idToken: idToken
        })
        .then((response) => {
          sessionStorage.setItem("accessToken", response.data.data.accessToken);
          sessionStorage.setItem("refreshToken", response.data.data.refreshToken);
          // TODO: 로그인버튼 클릭 후 set완료되고 홈으로 이동할때까지의 로딩상태에 대한 처리 필요
          navigate("/"); //set 끝났을때 홈으로 네비게이팅해서 해결~
        });
    }
  }, [idToken]);
  if (isClicked) {
    window.location.href = import.meta.env.VITE_LOGIN_LOCATION_URL;
  }

  const kakaoHandleLogin = () => {
    setIsClicked(true);
  };

  return (
    <>
      <ImagePagination images={images} isLogin={true} />
      <button onClick={() => kakaoHandleLogin()}>
        <img alt="loginBtn" src={LoginBtn} style={{ marginTop: "1em" }} />
      </button>
    </>
  );
};

export default memo(Login);
