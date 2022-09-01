import styled from "styled-components";
import { COLOR, DIMENSION } from "../../../../constant";

const StyledApplicationFooter = styled.footer`
    background-color: ${COLOR.FOOTER_BACKGROUND};
    height: ${DIMENSION.FOOTER_HEIGHT}px;
`;

const ApplicationFooter = () => {
    return <StyledApplicationFooter>Footer</StyledApplicationFooter>;
};

export { ApplicationFooter };
