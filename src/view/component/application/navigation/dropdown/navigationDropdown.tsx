import styled from "styled-components";
import {
  APPLICATION_COLOR,
  APPLICATION_DIMENSION,
} from "../../../../../constant";

interface NavigationDropdownProps {
  isOpen: boolean;
  heightOffset: number;
  onLinkClick: () => void;
}

interface NavigationDropdownContentProps {
  heightOffset: number;
}

const NavigationDropdownContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: ${APPLICATION_DIMENSION.MINIMUM_WIDTH}px;
`;

const NavigationDropdownContent = styled.div<NavigationDropdownContentProps>`
  background-color: ${APPLICATION_COLOR.NAVIGATION_DROPDOWN_BACKGROUND};
  height: ${({ heightOffset }) => {
    return `calc(100vh - ${heightOffset}px)`;
  }};
`;

const NavigationDropdown = ({
  isOpen,
  heightOffset,
}: NavigationDropdownProps) => {
  return isOpen ? (
    <NavigationDropdownContainer>
      <NavigationDropdownContent heightOffset={heightOffset}>
        Navigation Dropdown
      </NavigationDropdownContent>
    </NavigationDropdownContainer>
  ) : null;
};

export { NavigationDropdown };
