import styled from "styled-components";
import { APPLICATION_COLOR, APPLICATION_DIMENSION } from "../../../../constant";

const StyledApplicationFooter = styled.footer`
  background-color: ${APPLICATION_COLOR.FOOTER_BACKGROUND};
  height: ${APPLICATION_DIMENSION.FOOTER_HEIGHT}px;
`;

const ApplicationFooter = () => {
  return <StyledApplicationFooter>Footer</StyledApplicationFooter>;
};

export { ApplicationFooter };
