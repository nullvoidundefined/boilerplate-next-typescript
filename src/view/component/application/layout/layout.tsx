import { ReactNode, useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  useHeaderAndFooterHeightOffset,
  useHeaderHeightOffset,
} from "../../../../state";
import {
  selectUser,
  useWindowBreakpoint,
  ModalManagerContext,
} from "../../../../state";
import { AuthRequestData, User } from "../../../../type";
import { SignInModal } from "../../modal/signIn/signIn";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { NavigationDropdown } from "../navigation/dropdown/dropdown";
import { NavigationSidebar } from "../navigation/sidebar/sidebar";

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

const Content = styled.main<ContentProps>`
  min-height: ${({ heightOffset }) => {
    return `calc(100vh - ${heightOffset}px)`;
  }};
`;

const Layout = ({
  children,
  contentHeightOffset = 0,
  isMobile,
  navigationDropdownHeightOffset = 0,
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
    <>
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
          <Content heightOffset={contentHeightOffset}>
            {children}
          </Content>
        </div>
      ) : (
        <div className="d-flex">
          <NavigationSidebar />
          <div className="w-100">
            <Content heightOffset={contentHeightOffset}>
              <Container>{children}</Container>
            </Content>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export { Layout };
