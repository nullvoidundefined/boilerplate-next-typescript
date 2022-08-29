import { ReactNode } from "react";
import { Button as BSButton } from "react-bootstrap";
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <BSButton onClick={onClick}>{children}</BSButton>;
};

export { Button };
