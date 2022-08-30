import styled from "styled-components";

import {
  APPLICATION_COLOR,
  APPLICATION_DIMENSION,
} from "../../../../../constant";

interface NavigationSidebarProps {
  heightOffset: number;
}

const StyledNavigationSidebar = styled.div<NavigationSidebarProps>`
  background-color: ${APPLICATION_COLOR.SIDEBAR_BACKGROUND};
  max-width: ${APPLICATION_DIMENSION.SIDEBAR_WIDTH_DESKTOP}px;
  min-height: ${({ heightOffset }) => {
    return `calc(100vh - ${heightOffset}px)`;
  }};
  width: ${APPLICATION_DIMENSION.SIDEBAR_WIDTH_DESKTOP}px;
`;

const NavigationSidebar = ({ heightOffset }: NavigationSidebarProps) => {
  return (
    <StyledNavigationSidebar heightOffset={heightOffset}>
      Sidebar
    </StyledNavigationSidebar>
  );
};

export { NavigationSidebar };
