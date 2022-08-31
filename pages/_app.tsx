import "bootstrap/dist/css/bootstrap.min.css";

import "../src/view/style/global.css";

import type { AppProps } from "next/app";

import {
    selectUser,
    setUser,
    useHeaderAndFooterHeightOffset,
    useHeaderHeightOffset,
    useLagRadar,
    useWindowBreakpoint,
    wrapper,
} from "../src/state";
import {
    ApplicationLayout,
    ApplicationModal,
    SplashScreen,
} from "../src/view/component";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ApplicationModalContext } from "../src/state";
import { useDispatch, useSelector } from "react-redux";
import { AuthRequestData, User } from "../src/type";
import { SignInModal } from "../src/view/component";
import { noop } from "lodash";
import { useRouter } from "next/router";
import ErrorBoundary from "../src/view/component/errorBoundary/errorBoundary";
import { ErrorPage } from "../src/view/page/error/errorPage";

const App = ({ Component: Route, pageProps }: AppProps) => {
    const [doShowSplashScreen, setDoShowSplashScreen] = useState(true);

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const router = useRouter();

    const { isMobile } = useWindowBreakpoint();

    const contentHeightOffset = useHeaderAndFooterHeightOffset();
    const navigationDropdownHeightOffset = useHeaderHeightOffset();

    useLagRadar();

    const modalRef = useRef({
        hideModal: () => noop(),
        showModal: (modalContent: ReactNode) => modalContent,
    });

    const hideModal = () => {
        modalRef.current.hideModal();
    };

    const navigateToHomePage = () => {
        router.push("/");
    };

    const onSignInFormSubmit = (signUpData: AuthRequestData) => {
        const { password, email } = signUpData;
        fetch(`/api/auth/signIn?password=${password}&userName=${email}`)
            .then((response) => response.json())
            .then((userData) => {
                updateUser(userData);
                hideModal();
                router.push("/items");
            })
            .catch((error) => console.log(error));
    };

    const showSignInModal = () =>
        showModal(<SignInModal onFormSubmit={onSignInFormSubmit} />);

    const showModal = (modalContent: ReactNode) => {
        modalRef.current.showModal(modalContent);
    };

    const updateUser = (user: User) => {
        dispatch(setUser(user));
    };

    useEffect(() => {
        setTimeout(() => {
            setDoShowSplashScreen(false);
        }, 1000);
    }, []);

    return (
        <ErrorBoundary fallback={<ErrorPage />}>
            <ApplicationModal ref={modalRef} />
            <ApplicationModalContext.Provider value={{ hideModal, showModal }}>
                <div className="position-relative w-100">
                    {doShowSplashScreen ? <SplashScreen /> : null}
                    <ApplicationLayout
                        contentHeightOffset={contentHeightOffset}
                        navigationDropdownHeightOffset={
                            navigationDropdownHeightOffset
                        }
                        isMobile={isMobile}
                        onLogInButtonClick={showSignInModal}
                        onLogOutButtonClick={() => noop}
                        onLogoClick={navigateToHomePage}
                        user={user}
                    >
                        <Route {...pageProps} />
                    </ApplicationLayout>
                </div>
            </ApplicationModalContext.Provider>
        </ErrorBoundary>
    );
};

export default wrapper.withRedux(App);
