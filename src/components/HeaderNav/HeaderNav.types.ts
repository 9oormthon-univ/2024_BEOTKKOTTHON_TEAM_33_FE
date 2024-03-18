// Props 타입 정의
export interface HeaderWrapperProps {
  height? : string;
  width?: string;
 
}
export interface HeaderProps extends HeaderWrapperProps {
  type: 'withLogo' | 'withPrevButton' | 'textOnly';
  text: '해봄이' | '최근 사진' | '나른한 하루'|'나의 추억 기록함';
}
