import { useLocation, useNavigate } from "react-router";
import HomeIconActive from "@assets/icons/ion_home-outline.svg?react";
import HomeIcon from "@assets/icons/ion_home-nooutline (1).svg?react";
import SeniorIcon from "@assets/icons/ion_location-outline.svg?react";
import SeniorIconActive from "@assets/icons/ion_location-withoutline (1).svg?react";
import PersonIcon from "@assets/icons/ion_person-noline.svg?react";
import PersonIconActive from "@assets/icons/ion_person-outline.svg?react";
import LessonIconActive from "@assets/icons/ion_book-outline.svg?react";
import LessonIcon from "@assets/icons/ion_book-noline.svg?react";
// import { NavbarButtonProps } from "./NavbarButton.types";
import styled from "@emotion/styled";

export const BottomNavButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  ${({ theme }) => theme.text.detail2_reg};
`;
interface NavbarButtonProps {
  path: string;
}

const NavbarButton = ({ path }: NavbarButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  const tapList = new Map([
    [
      "/",
      {
        label: "함께보기",
        component: <HomeIcon />,
        componentActive: <HomeIconActive />
      }
    ],
    [
      "/location",
      { label: "경로당", component: <SeniorIcon />, componentActive: <SeniorIconActive /> }
    ],
    [
      "/lesson",
      {
        label: "문화수업",
        component: <LessonIcon />,
        componentActive: <LessonIconActive />
      }
    ],
    [
      "/myInfo",
      {
        label: "내정보",
        component: <PersonIcon />,
        componentActive: <PersonIconActive />
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
    <BottomNavButtonWrapper className={isActive ? "active" : ""} onClick={handleButtonClick}>
      {isActive ? componentActive : component}
      {label}
    </BottomNavButtonWrapper>
  );
};

export default NavbarButton;
