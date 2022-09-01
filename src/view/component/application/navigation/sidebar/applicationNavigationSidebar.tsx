import styled from "styled-components";

import { COLOR, DIMENSION } from "../../../../../constant";

interface ApplicationNavigationSidebarProps {
    heightOffset: number;
}

const StyledApplicationNavigationSidebar = styled.div<ApplicationNavigationSidebarProps>`
    background-color: ${COLOR.SIDEBAR_BACKGROUND};
    min-height: ${({ heightOffset }) => {
        return `calc(100vh - ${heightOffset}px)`;
    }};
    width: ${DIMENSION.SIDEBAR_WIDTH_DESKTOP}px;
`;

const ApplicationNavigationSidebar = ({
    heightOffset,
}: ApplicationNavigationSidebarProps) => {
    return (
        <StyledApplicationNavigationSidebar heightOffset={heightOffset}>
            Sidebar
        </StyledApplicationNavigationSidebar>
    );
};

export { ApplicationNavigationSidebar };
