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

interface LayoutContentProps {
  heightOffset: number;
}

interface LayoutProps {
  children: ReactNode;
  onSignInSuccess: (userData: User) => void;
};

const LayoutContent = styled.main<LayoutContentProps>`
  min-height: ${({ heightOffset }) => {
    return `calc(100vh - ${heightOffset}px)`;
  }};
`;

const Layout = ({ children, onSignInSuccess }: LayoutProps) => {
  const [isNavigationDropdownOpen, setIsNavigationDropdownOpen] =
    useState(false);
  const user = useSelector(selectUser);

  const modalManagerContext = useContext(ModalManagerContext);
  const { hideModal, showModal } = modalManagerContext;

  const mainContentHeightOffset = useHeaderAndFooterHeightOffset();
  const navigationDropdownHeightOffset = useHeaderHeightOffset();

  const { isMobile } = useWindowBreakpoint();

  const toggleDropdown = () => {
    setIsNavigationDropdownOpen(!isNavigationDropdownOpen);
  };

  const onFormSubmit = (signUpData: AuthRequestData) => {
    const { password, email } = signUpData;
    fetch(`/api/auth/signIn?password=${password}&userName=${email}`)
      .then((response) => response.json())
      .then((userData) => onSignInSuccess(userData))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header
        isAuth={Boolean(user)}
        isMobile={isMobile}
        isNavigationDropdownOpen={isNavigationDropdownOpen}
        onDropDownToggleButtonClick={toggleDropdown}
        onLogInButtonClick={() =>
          showModal(
            <SignInModal onHide={hideModal} onFormSubmit={onFormSubmit} />
          )
        }
        onLogOutButtonClick={() => {}}
      />
      {isMobile ? (
        <div className="position-relative">
          <NavigationDropdown
            heightOffset={navigationDropdownHeightOffset}
            isOpen={isNavigationDropdownOpen}
            onLinkClick={toggleDropdown}
          />
          <LayoutContent heightOffset={mainContentHeightOffset}>
            {children}
          </LayoutContent>
        </div>
      ) : (
        <div className="d-flex">
          <NavigationSidebar />
          <div className="w-100">
            <LayoutContent heightOffset={mainContentHeightOffset}>
              <Container>{children}</Container>
            </LayoutContent>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export { Layout };
