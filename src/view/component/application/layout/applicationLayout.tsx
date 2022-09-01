import { ReactNode, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import { ApplicationFooter } from "../footer/applicationFooter";
import { ApplicationHeader } from "../header/applicationHeader";
import { ApplicationNavigationDropdown } from "../navigation/dropdown/applicationNavigationDropdown";
import { ApplicationNavigationSidebar } from "../navigation/sidebar/applicationNavigationSidebar";

import { COLOR, DIMENSION } from "../../../../constant";
import { User } from "../../../../type";

interface ContentProps {
    heightOffset: number;
}

interface ApplicationLayoutProps {
    children: ReactNode;
    contentHeightOffset: number;
    isMobile: boolean;
    navigationDropdownHeightOffset: number;
    onLogInButtonClick: () => void;
    onLogOutButtonClick: () => void;
    onLogoClick: () => void;
    user: User | null;
}

const StyledApplicationLayout = styled.div`
    min-width: ${DIMENSION.MINIMUM_WIDTH}px;
`;

const ApplicationContent = styled.main<ContentProps>`
    background-color: ${COLOR.CONTENT_BACKGROUND};
    min-height: ${({ heightOffset }) => {
        return `calc(100vh - ${heightOffset}px)`;
    }};
`;

const ApplicationLayout = ({
    children,
    contentHeightOffset,
    isMobile,
    navigationDropdownHeightOffset,
    onLogInButtonClick,
    onLogOutButtonClick,
    onLogoClick,
    user,
}: ApplicationLayoutProps) => {
    const [isNavigationDropdownOpen, setIsNavigationDropdownOpen] =
        useState(false);

    const toggleDropdown = () => {
        setIsNavigationDropdownOpen(!isNavigationDropdownOpen);
    };

    return (
        <StyledApplicationLayout>
            <ApplicationHeader
                isAuth={Boolean(user)}
                isMobile={isMobile}
                isNavigationDropdownOpen={isNavigationDropdownOpen}
                onDropDownToggleButtonClick={toggleDropdown}
                onLogInButtonClick={onLogInButtonClick}
                onLogOutButtonClick={onLogOutButtonClick}
                onLogoClick={onLogoClick}
            />
            {isMobile ? (
                <div className="position-relative">
                    <ApplicationNavigationDropdown
                        heightOffset={navigationDropdownHeightOffset}
                        isOpen={isNavigationDropdownOpen}
                        onLinkClick={toggleDropdown}
                    />
                    <ApplicationContent heightOffset={contentHeightOffset}>
                        {children}
                    </ApplicationContent>
                </div>
            ) : (
                <div className="d-flex">
                    <ApplicationNavigationSidebar
                        heightOffset={contentHeightOffset}
                    />
                    <div className="w-100">
                        <ApplicationContent heightOffset={contentHeightOffset}>
                            <Container>{children}</Container>
                        </ApplicationContent>
                    </div>
                </div>
            )}
            <ApplicationFooter />
        </StyledApplicationLayout>
    );
};

export { ApplicationLayout };
