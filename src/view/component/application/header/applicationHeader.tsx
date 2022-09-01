import styled from "styled-components";
import { Button } from "../../../design-system";
import { COLOR, DIMENSION } from "../../../../constant";
import { ApplicationLogo } from "../logo/applicationLogo";

// TODO add conditional typechecking to negate the need for the default onDropDownToggleButtonClick prop

interface ApplicationHeaderProps {
    isAuth: boolean;
    isMobile: boolean;
    onLogInButtonClick: () => void;
    onLogOutButtonClick: () => void;
    onLogoClick: () => void;

    isNavigationDropdownOpen?: boolean;
    onDropDownToggleButtonClick?: () => void;
}

interface StyledApplicationHeaderProps {
    isMobile: boolean;
}

const StyledButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const StyledApplicationHeader = styled.header<StyledApplicationHeaderProps>`
    align-items: center;
    background-color: ${COLOR.HEADER_BACKGROUND};
    display: flex;
    height: ${({ isMobile }) =>
        isMobile
            ? `${DIMENSION.HEADER_HEIGHT_MOBILE}px`
            : `${DIMENSION.HEADER_HEIGHT_DESKTOP}px`};
    justify-content: space-between;
    padding: 10px;
`;

const ApplicationHeader = ({
    isAuth,
    isMobile,
    isNavigationDropdownOpen,
    onDropDownToggleButtonClick = () => null,
    onLogInButtonClick,
    onLogOutButtonClick,
    onLogoClick,
}: ApplicationHeaderProps) => {
    return (
        <StyledApplicationHeader isMobile={isMobile}>
            <ApplicationLogo onClick={onLogoClick} />
            <StyledButtonContainer>
                {isAuth ? (
                    <Button onClick={onLogOutButtonClick}>
                        <span>Log Out</span>
                    </Button>
                ) : (
                    <Button onClick={onLogInButtonClick}>
                        <span>Log In</span>
                    </Button>
                )}
                {isMobile ? (
                    <Button onClick={onDropDownToggleButtonClick}>
                        {isNavigationDropdownOpen ? "Close Menu " : "Open Menu"}
                    </Button>
                ) : null}
            </StyledButtonContainer>
        </StyledApplicationHeader>
    );
};

export { ApplicationHeader };
