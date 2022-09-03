import { getDatabaseClient } from "../../database/getClient/getClient";

import { signInQuery } from "../../../service";

const authSignIn = async (username: string, password: string) => {
    const authSignInQuery = signInQuery(username as string, password as string);

    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(authSignInQuery);
    await client.clean();
    if (result.rows.length > 0) {
        return { data: result.rows[0], success: true };
    } else {
        return { data: null, success: false };
    }
};

export { authSignIn };
