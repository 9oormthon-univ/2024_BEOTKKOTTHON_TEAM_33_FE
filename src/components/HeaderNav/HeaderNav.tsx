import * as S from "./HeaderNav.styles";
import { HeaderProps } from "./HeaderNav.types";
import PeopleIcon from "@assets/icons/ion_person.svg?react";
import PrevIcon from "@assets/icons/ion_chevron-back.svg?react";
import LogoIcon from "@assets/icons/기억해봄.svg?react";
import NewIcon from "@assets/icons/너나들이.svg?react";
import NotifyIcon from "@assets/icons/ion_notifications-outline.svg?react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogOutModal from "@components/LogOutModal/LogOutModal";

const Header = ({ type, text }: HeaderProps) => {
  const navigate = useNavigate();
  const [isLogOut, setIsLogOut] = useState(false);
  const handleClick = () => {
    setIsLogOut(true);
  };
  const goBack = () => {
    navigate(-1);
  };
  const handleLogoutClose = () => {
    setIsLogOut(false);
  };
  return (
    <>
      {type === "withLogo" && (
        <>
          <S.HeaderWithLogo>
            <S.TitleText>
              <LogoIcon />
            </S.TitleText>
            <button onClick={handleClick}>
              <PeopleIcon />
            </button>
          </S.HeaderWithLogo>
          {isLogOut && <LogOutModal isOpen={isLogOut} onClose={handleLogoutClose} />}
        </>
      )}
      {type === "withPrevButton" && (
        <>
          <S.HeaderWithMiddleText>
            <button onClick={goBack}>
              <PrevIcon />
            </button>
            <span>{text}</span>
          </S.HeaderWithMiddleText>
        </>
      )}
      {type === "textOnly" && (
        <>
          <S.HeaderWithMiddleText>
            <span>{text}</span>
          </S.HeaderWithMiddleText>
        </>
      )}
      {type === "withNewLogo" && (
        <>
          <S.HeaderWithLogo>
            <S.TitleText>
              <NewIcon />
            </S.TitleText>
            <button onClick={handleClick}>
              <NotifyIcon />
            </button>
          </S.HeaderWithLogo>
        </>
      )}
    </>
  );
};

export default Header;
