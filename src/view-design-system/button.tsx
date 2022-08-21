import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children: ReactNode;
}

const StyledButton = styled.button`
  color: red;
`;

export function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
