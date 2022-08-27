import styled from "styled-components";
import { APPLICATION_COLOR } from "../../../../../constant";

interface NavigationDropdownProps {
  heightOffset: number;
}

const NavigationDropdownContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const NavigationDropdownContent = styled.div<NavigationDropdownProps>`
  background-color: ${APPLICATION_COLOR.NAVIGATION_DROPDOWN_BACKGROUND};
  height: ${({ heightOffset }) => {
    return `calc(100vh - ${heightOffset}px)`;
  }};
`;

export { NavigationDropdownContainer, NavigationDropdownContent };
