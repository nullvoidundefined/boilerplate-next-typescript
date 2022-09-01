import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../src/state";
import { AdminDashboardPage } from "../../src/view/page";

export default function HomeRoute() {
    const router = useRouter();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (user) {
            router.push("/proposals");
        }
    }, [router, user]);

    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <AdminDashboardPage />
        </>
    );
}
