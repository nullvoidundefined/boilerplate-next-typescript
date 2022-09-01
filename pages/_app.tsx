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
import { AuthRequestData, User } from "../src/type";
import {
    ApplicationLayout,
    ApplicationModal,
    ErrorBoundary,
    SignInModal,
} from "../src/view/component";
import { ErrorPage } from "../src/view/page";

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
        const { password, email } = signUpData;
        fetch(`/api/auth/signIn?password=${password}&userName=${email}`)
            .then((response) => response.json())
            .then((userData) => {
                hideModal();
                updateUser(userData);
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

    useEffect(() => {
        fetch(`/api/database/ping`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.log(error));
    }, []);

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
