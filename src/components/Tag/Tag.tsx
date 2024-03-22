import * as S from "./Tag.styles";
import { TagProps } from "./Tag.types";

const Tag = ({ children }: TagProps) => {
  return (
    <S.TagWrapper>
      <S.TagText>{children}</S.TagText>
    </S.TagWrapper>
  );
};

export default Tag;
