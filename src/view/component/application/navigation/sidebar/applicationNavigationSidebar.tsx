import styled from "styled-components";

import {
  APPLICATION_COLOR,
  APPLICATION_DIMENSION,
} from "../../../../../constant";

interface ApplicationNavigationSidebarProps {
  heightOffset: number;
}

const StyledApplicationNavigationSidebar = styled.div<ApplicationNavigationSidebarProps>`
  background-color: ${APPLICATION_COLOR.SIDEBAR_BACKGROUND};
  max-width: ${APPLICATION_DIMENSION.SIDEBAR_WIDTH_DESKTOP}px;
  min-height: ${({ heightOffset }) => {
    return `calc(100vh - ${heightOffset}px)`;
  }};
  width: ${APPLICATION_DIMENSION.SIDEBAR_WIDTH_DESKTOP}px;
`;

const ApplicationNavigationSidebar = ({ heightOffset }: ApplicationNavigationSidebarProps) => {
  return (
    <StyledApplicationNavigationSidebar heightOffset={heightOffset}>
      Sidebar
    </StyledApplicationNavigationSidebar>
  );
};

export { ApplicationNavigationSidebar };
