import styled from "styled-components";
import { COLOR } from "../../../../../constant";

interface ApplicationNavigationDropdownProps {
    isOpen: boolean;
    heightOffset: number;
    onLinkClick: () => void;
}

interface ApplicationNavigationDropdownContentProps {
    heightOffset: number;
}

const ApplicationNavigationDropdownContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
`;

const ApplicationNavigationDropdownContent = styled.div<ApplicationNavigationDropdownContentProps>`
    background-color: ${COLOR.NAVIGATION_DROPDOWN_BACKGROUND};
    height: ${({ heightOffset }) => {
        return `calc(100vh - ${heightOffset}px)`;
    }};
`;

const ApplicationNavigationDropdown = ({
    isOpen,
    heightOffset,
}: ApplicationNavigationDropdownProps) => {
    return isOpen ? (
        <ApplicationNavigationDropdownContainer>
            <ApplicationNavigationDropdownContent heightOffset={heightOffset}>
                Navigation Dropdown
            </ApplicationNavigationDropdownContent>
        </ApplicationNavigationDropdownContainer>
    ) : null;
};

export { ApplicationNavigationDropdown };
