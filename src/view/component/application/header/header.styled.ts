import styled from "styled-components";
import { APPLICATION_COLOR, APPLICATION_DIMENSION } from "../../../../constant";

interface StyledHeaderProps {
  isMobile: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  background-color: ${APPLICATION_COLOR.HEADER_BACKGROUND};
  height: ${APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP}px;
  height: ${({ isMobile }) =>
    isMobile
      ? `${APPLICATION_DIMENSION.HEADER_HEIGHT_MOBILE}px`
      : `${APPLICATION_DIMENSION.HEADER_HEIGHT_DESKTOP}px`};
`;

export { StyledHeader };
