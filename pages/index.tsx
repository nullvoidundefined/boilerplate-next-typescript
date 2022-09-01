import { GetStaticProps } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import { authSignIn } from "../src/service";
import { selectHasRequiredApplicationData } from "../src/state/slice/application";
import { User } from "../src/type";

import { SplashScreen } from "../src/view/component";
import { HomePage } from "../src/view/page";

export default function HomeRoute({ user }: { user: User }) {
    console.log("user", user);

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

export const getStaticProps: GetStaticProps = async () => {
    const user = await authSignIn("root", "swordfish");
    return {
        props: {
            user,
        },
    };
};
