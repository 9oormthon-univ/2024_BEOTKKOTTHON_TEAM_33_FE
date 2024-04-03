export interface ImagePaginationProps {
  images: string[];
  isLogin: boolean;
  width?: string;
  height?: string;
  setImageVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}
