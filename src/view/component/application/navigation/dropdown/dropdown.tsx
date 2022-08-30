import {
  NavigationDropdownContainer,
  NavigationDropdownContent,
} from "./dropdown.styled";

interface NavigationDropdownProps {
  isOpen: boolean;
  heightOffset: number;
  onLinkClick: () => void;
}

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
