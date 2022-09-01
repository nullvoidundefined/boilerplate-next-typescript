import { getDatabaseClient } from "../../getClient";
import { buildUserAuthQuery } from "../../../constant/query";

const authSignIn = async (userName: string, password: string) => {
    const signInQuery = buildUserAuthQuery(
        userName as string,
        password as string
    );

    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(signInQuery);
    await client.clean();
    if (result.rows.length > 0) {
        return { user: result.rows[0], success: true };
    } else {
        return { user: null, success: false };
    }
};

export { authSignIn };
