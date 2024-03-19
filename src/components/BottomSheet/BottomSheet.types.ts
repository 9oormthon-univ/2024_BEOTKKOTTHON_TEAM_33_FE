export interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
