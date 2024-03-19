import * as S from "./NavbarButton.styles";
import { useLocation, useNavigate } from "react-router";
import HomeIcon from "@assets/icons/homeIcon.svg?react";
import HomeIconActive from "@assets/icons/homeIcon_active.svg?react";
import MyCollectionIcon from "@assets/icons/myCollectionIcon.svg?react";
import MyCollectionIconActive from "@assets/icons/myCollectionIcon_active.svg?react";
import OtherCollectionIcon from "@assets/icons/otherCollectionIcon.svg?react";
import OtherCollectionIconActive from "@assets/icons/otherCollectionIcon_active.svg?react";
import { NavbarButtonProps } from "./NavbarButton.types";

const NavbarButton = ({ path }: NavbarButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  const tapList = new Map([
    [
      "/myCollection",
      {
        label: "모아보기",
        component: <MyCollectionIcon />,
        componentActive: <MyCollectionIconActive />
      }
    ],
    ["/", { label: "홈", component: <HomeIcon />, componentActive: <HomeIconActive /> }],
    [
      "/otherCollection",
      {
        label: "함께보기",
        component: <OtherCollectionIcon />,
        componentActive: <OtherCollectionIconActive />
      }
    ]
  ]);

  const { label, component, componentActive } = tapList.get(path) || {
    label: "",
    component: null,
    componentActive: null
  };

  const handleButtonClick = () => {
    const currentPath = window.location.pathname;

    if (path === currentPath) {
      return;
    }

    navigate(path);
  };

  return (
    <S.BottomNavButtonWrapper className={isActive ? "active" : ""} onClick={handleButtonClick}>
      {isActive ? componentActive : component}
      {label}
    </S.BottomNavButtonWrapper>
  );
};

export default NavbarButton;
