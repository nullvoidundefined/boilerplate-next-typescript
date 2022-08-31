import { ReactNode } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";
interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

const StyledButton = styled(BootstrapButton)`
    align-items: center;
    display: flex;
    height: 40px;
`;

const Button = ({ children, onClick }: ButtonProps) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Button };
