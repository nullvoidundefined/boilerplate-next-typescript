import Head from "next/head";
import { useSelector } from "react-redux";

import { selectHasRequiredApplicationData } from "../src/state";
import { SplashScreen } from "../src/view/component";
import { HomePage } from "../src/view/page";

export default function HomeRoute() {
    const hasRequireApplicationdData = useSelector(
        selectHasRequiredApplicationData
    );

    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            {hasRequireApplicationdData ? <HomePage /> : <SplashScreen />}
        </>
    );
}
