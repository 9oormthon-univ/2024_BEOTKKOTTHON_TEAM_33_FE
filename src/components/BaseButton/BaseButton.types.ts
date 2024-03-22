export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: "abled" | "disabled" | "white";
  width?: string;
}

export interface BaseButtonStylesProps {
  width?: string;
}
