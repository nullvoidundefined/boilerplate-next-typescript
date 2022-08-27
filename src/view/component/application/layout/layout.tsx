import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useCombinedHeaderAndFooterHeightOffset,
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
  const router = useRouter();
  const user = useSelector(selectUser);

  const mainContentHeightOffset = useCombinedHeaderAndFooterHeightOffset();
  const navigationDropdownHeightOffset = useHeaderHeightOffset();

  const { isMobile } = useWindowBreakpoint();

  const toggleDropdown = () => {
    setIsNavigationDropdownOpen(!isNavigationDropdownOpen);
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return (
    <>
      <Header
        isAuth={Boolean(user)}
        isMobile={isMobile}
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
