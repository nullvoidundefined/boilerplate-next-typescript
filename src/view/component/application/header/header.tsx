import { Button } from "../../../design-system";
import { StyledHeader } from "./header.styled";

// TODO add conditional typechecking to negate the need for the default onDropDownToggleButtonClick prop

type HeaderProps = {
  isAuth: boolean;
  isMobile: boolean;
  isNavigationDropdownOpen?: boolean;
  onDropDownToggleButtonClick?: () => void;
};

const Header = ({
  isAuth,
  isMobile,
  isNavigationDropdownOpen,
  onDropDownToggleButtonClick = () => null,
}: HeaderProps) => {
  return (
    <StyledHeader isMobile={isMobile}>
      {isAuth ? "Authorized " : "Not Authorized"}
      {isMobile ? (
        <Button onClick={onDropDownToggleButtonClick}>
          {isNavigationDropdownOpen ? "close " : "open"}
        </Button>
      ) : null}
    </StyledHeader>
  );
};

export { Header };
