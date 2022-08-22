import { ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button`
  color: blue;
`;

export function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
