import styled from "styled-components";
import { Button } from "../../../design-system";
import { APPLICATION_COLOR, APPLICATION_DIMENSION } from "../../../../constant";

// TODO add conditional typechecking to negate the need for the default onDropDownToggleButtonClick prop

interface HeaderProps {
  isAuth: boolean;
  isMobile: boolean;
  onLogInButtonClick: () => void;
  onLogOutButtonClick: () => void;

  isNavigationDropdownOpen?: boolean;
  onDropDownToggleButtonClick?: () => void;
}

interface StyledHeaderProps {
  isMobile: boolean;
}

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledHeader = styled.header<StyledHeaderProps>`
  align-items: center;
  background-color: ${APPLICATION_COLOR.HEADER_BACKGROUND};
  display: flex;
  height: ${({ isMobile }) =>
    isMobile
      ? `${APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE}px`
      : `${APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP}px`};
  justify-content: space-between;
  padding: 10px;
`;

const Header = ({
  isAuth,
  isMobile,
  isNavigationDropdownOpen,
  onDropDownToggleButtonClick = () => null,
  onLogInButtonClick,
  onLogOutButtonClick,
}: HeaderProps) => {
  return (
    <StyledHeader isMobile={isMobile}>
      <h1>VIBE BIO</h1>
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
    </StyledHeader>
  );
};

export { Header };
