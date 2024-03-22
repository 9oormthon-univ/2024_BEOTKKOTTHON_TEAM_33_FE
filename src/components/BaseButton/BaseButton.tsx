import * as S from "./BaseButton.styles";
import { BaseButtonProps } from "./BaseButton.types";

const BaseButton = ({ buttonType, children, ...props }: BaseButtonProps) => {
  switch (buttonType) {
    case "abled":
      return <S.AbledButton {...props}>{children}</S.AbledButton>;
    case "disabled":
      return <S.DisabledButton {...props}>{children}</S.DisabledButton>;
    case "white":
      return <S.WhiteButton {...props}>{children}</S.WhiteButton>;

    default:
      return null;
  }
};

export default BaseButton;
