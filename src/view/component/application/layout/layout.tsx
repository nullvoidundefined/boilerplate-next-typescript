import { ReactNode, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { APPLICATION_DIMENSION } from "../../../../constant";
import { User } from "../../../../type";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { NavigationDropdown } from "../navigation/dropdown/navigationDropdown";
import { NavigationSidebar } from "../navigation/sidebar/navigationSidebar";

interface ContentProps {
  heightOffset: number;
}

interface LayoutProps {
  children: ReactNode;
  contentHeightOffset: number;
  isMobile: boolean;
  navigationDropdownHeightOffset: number;
  onLogInButtonClick: () => void;
  onLogOutButtonClick: () => void;
  user: User | null;
}

const StyledLayout = styled.div`
  min-width: ${APPLICATION_DIMENSION.MINIMUM_WIDTH}px;
`

const Content = styled.main<ContentProps>`
  min-height: ${({ heightOffset }) => {
    return `calc(100vh - ${heightOffset}px)`;
  }};
`;

const Layout = ({
  children,
  contentHeightOffset,
  isMobile,
  navigationDropdownHeightOffset,
  onLogInButtonClick,
  onLogOutButtonClick,
  user,
}: LayoutProps) => {
  const [isNavigationDropdownOpen, setIsNavigationDropdownOpen] =
    useState(false);

  const toggleDropdown = () => {
    setIsNavigationDropdownOpen(!isNavigationDropdownOpen);
  };

  return (
    <StyledLayout>
      <Header
        isAuth={Boolean(user)}
        isMobile={isMobile}
        isNavigationDropdownOpen={isNavigationDropdownOpen}
        onDropDownToggleButtonClick={toggleDropdown}
        onLogInButtonClick={onLogInButtonClick}
        onLogOutButtonClick={onLogOutButtonClick}
      />
      {isMobile ? (
        <div className="position-relative">
          <NavigationDropdown
            heightOffset={navigationDropdownHeightOffset}
            isOpen={isNavigationDropdownOpen}
            onLinkClick={toggleDropdown}
          />
          <Content heightOffset={contentHeightOffset}>{children}</Content>
        </div>
      ) : (
        <div className="d-flex">
          <NavigationSidebar heightOffset={contentHeightOffset}/>
          <div className="w-100">
            <Content heightOffset={contentHeightOffset}>
              <Container>{children}</Container>
            </Content>
          </div>
        </div>
      )}
      <Footer />
    </StyledLayout>
  );
};

export { Layout };
