import Head from "next/head";

import { siteTitle } from "../src/constant";
import { HomePage } from "../src/view/page";

export default function HomeRoute() {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <HomePage />
        </>
    );
}
