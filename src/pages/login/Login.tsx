import { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import ImagePagination from "@components/ImagePagination/ImagePagination";
import LoginBtn from "@assets/icons/kakao_login_large_wide.png";
import axios from "axios";

const images = [
  "../src/assets/icons/Voice Activated Device.jpg",
  "../src/assets/icons/Users Network.jpg",
  "../src/assets/icons/Sending Receiving Texts Messages.jpg"
];

const Login = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [idToken, setIdToken] = useState(false);
  const navigate = useNavigate();
  var params = new URL(document.URL).searchParams;
  var code = params.get("code");
  useEffect(() => {
    if (code) {
      axios({
        method: "post",
        url: "https://kauth.kakao.com/oauth/token",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          code: code,
          client_id: "e1b1aebac9030ea946e773bb00c46e30",
          grant_type: "authorization_code",
          redirect_uri: "http://localhost:5173/login"
        }
      })
        .then((response) => {
          console.log(response.data.id_token);
          setIdToken(response.data.id_token);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [code]);
  useEffect(() => {
    if (idToken) {
      axios
        .post(import.meta.env.VITE_LOGIN_URL, {
          idToken: idToken
        })
        .then((response) => {
          sessionStorage.setItem("accessToken", response.data.data.accessToken);
          sessionStorage.setItem("refreshToken", response.data.data.refreshToken);
        });
      navigate("/");
    }
  }, [idToken]);
  if (isClicked) {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=e1b1aebac9030ea946e773bb00c46e30&redirect_uri=http://localhost:5173/login";
  }
  const kakaoHandleLogin = () => {
    setIsClicked(true);
  };

  return (
    <>
      <ImagePagination images={images} isLogin={true} />;
      <button onClick={() => kakaoHandleLogin()}>
        <img alt="loginBtn" src={LoginBtn} style={{ marginTop: "1em" }} />
      </button>
    </>
  );
};

export default memo(Login);
