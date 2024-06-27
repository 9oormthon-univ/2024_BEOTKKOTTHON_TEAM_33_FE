import { BottomModalProps } from "./LogOutModal.types";
import axios from "axios";
import { ModalOverlay, ModalContent } from "./LogoutModal.styles";
import { useNavigate } from "react-router-dom";

const LogOutModal = ({ isOpen, onClose }: BottomModalProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("클릭");
    const kakaoAccessToken = sessionStorage.getItem("kakaoAccessToken");
    axios({
      method: "POST",
      url: "https://kapi.kakao.com/v1/user/logout",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${kakaoAccessToken}`
      }
    }).then(() => {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("kakaoAccessToken"); //이 코드 없으면 세션스토리지에서 카카오로부터 받은 accesstoken 안지워짐
      navigate("/onboarding");
    });
  };
  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={onClose}>
        <ModalContent onClick={handleLogout}>로그아웃</ModalContent>
      </ModalOverlay>
    </>
  );
};

export default LogOutModal;
