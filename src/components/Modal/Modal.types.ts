export interface ModalProp extends React.HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content?: string;
  isCancelTextExist?: boolean;
  children: React.ReactNode;
}
