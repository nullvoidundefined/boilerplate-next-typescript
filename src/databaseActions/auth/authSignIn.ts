import { getDatabaseClient } from "../../service/database/utility/getClient";
import { buildAuthSignInQuery } from "../../constant/query";

const authSignIn = async (userName: string, password: string) => {
    const authSignInQuery = buildAuthSignInQuery(
        userName as string,
        password as string
    );

    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(authSignInQuery);
    await client.clean();
    if (result.rows.length > 0) {
        return { user: result.rows[0], success: true };
    } else {
        return { user: null, success: false };
    }
};

export { authSignIn };
