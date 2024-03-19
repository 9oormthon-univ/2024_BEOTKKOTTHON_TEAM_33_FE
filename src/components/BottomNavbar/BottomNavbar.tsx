import * as S from "./BottomNavbar.styles";
import NavbarButton from "@components/NavbarButton/NavbarButton";

const BottomNavBar = () => {
  return (
    <S.BottomNavbarWrapper>
      <NavbarButton path="/myCollection" />
      <NavbarButton path="/" />
      <NavbarButton path="/otherCollection" />
    </S.BottomNavbarWrapper>
  );
};

export default BottomNavBar;
