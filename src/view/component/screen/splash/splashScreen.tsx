import styled from "styled-components";
import { ApplicationLogo } from "../../application/logo/applicationLogo";

const StyledSplashScreenContainer = styled.div`
    align-items: center;
    background-color: white; // TODO Don't handle colors like this. Use state
    bottom: 0;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2; // TODO Don't handle z-indexes like this. Create a map
`;

const SplashScreen = () => {
    return (
        <StyledSplashScreenContainer>
            <ApplicationLogo />
        </StyledSplashScreenContainer>
    );
};

export { SplashScreen };
