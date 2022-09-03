import "bootstrap/dist/css/bootstrap.min.css";

import "../src/view/style/global.css";

import { noop } from "lodash";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    ApplicationModalContext,
    setHasRequiredApplicationData,
    selectHasRequiredApplicationData,
    selectUser,
    setUser,
    useHeaderAndFooterHeightOffset,
    useHeaderHeightOffset,
    useLagRadar,
    useWindowBreakpoint,
    wrapper,
} from "../src/state";
import { AuthRequestData } from "../src/type";
import {
    ApplicationLayout,
    ApplicationModal,
    ErrorBoundary,
    SignInModal,
} from "../src/view/component";
import { ErrorPage } from "../src/view/page";
import { getSignInUrl } from "../src/constant";

const App = ({ Component: Route, pageProps }: AppProps) => {
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
        const { password, username } = signUpData;
        fetch(getSignInUrl(password, username))
            .then((response) => response.json())
            .then((userData) => {
                hideModal();
                dispatch(setUser(userData));
                router.push("/proposals");
            })
            .catch((error) => console.log(error));
    };

    const showSignInModal = () =>
        showModal(<SignInModal onFormSubmit={onSignInFormSubmit} />);

    const showModal = (modalContent: ReactNode) => {
        modalRef.current.showModal(modalContent);
    };

    const hasRequiredApplicationData = useSelector(
        selectHasRequiredApplicationData
    );

    useEffect(() => {
        if (!hasRequiredApplicationData) {
            setTimeout(() => {
                dispatch(setHasRequiredApplicationData(true));
            }, 1000);
        }
    }, [dispatch, hasRequiredApplicationData]);

    return (
        <ErrorBoundary fallback={<ErrorPage />}>
            <ApplicationModal ref={modalRef} />
            <ApplicationModalContext.Provider value={{ hideModal, showModal }}>
                <div className="position-relative w-100">
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
