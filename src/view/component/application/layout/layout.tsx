import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useHeaderAndFooterHeightOffset,
  useHeaderHeightOffset,
} from "../../../../state";
import { selectUser, useWindowBreakpoint } from "../../../../state";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { NavigationDropdown } from "../navigation/dropdown/dropdown";
import { NavigationSidebar } from "../navigation/sidebar/sidebar";
import { MainContent } from "./layout.styled";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isNavigationDropdownOpen, setIsNavigationDropdownOpen] =
    useState(false);
  const user = useSelector(selectUser);

  const mainContentHeightOffset = useHeaderAndFooterHeightOffset();
  const navigationDropdownHeightOffset = useHeaderHeightOffset();

  const { isMobile } = useWindowBreakpoint();

  const toggleDropdown = () => {
    setIsNavigationDropdownOpen(!isNavigationDropdownOpen);
  };

  return (
    <>
      <Header
        isAuth={Boolean(user)}
        isMobile={isMobile ? true : false}
        isNavigationDropdownOpen={isNavigationDropdownOpen}
        onDropDownToggleButtonClick={toggleDropdown}
      />
      {isMobile ? (
        <div className="position-relative">
          <NavigationDropdown
            heightOffset={navigationDropdownHeightOffset}
            isOpen={isNavigationDropdownOpen}
            onLinkClick={toggleDropdown}
          />
          <MainContent heightOffset={mainContentHeightOffset}>
            {children}
          </MainContent>
        </div>
      ) : (
        <div className="d-flex">
          <NavigationSidebar />
          <div className="w-100">
            <MainContent heightOffset={mainContentHeightOffset}>
              {children}
            </MainContent>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export { Layout };
