import { getDatabaseClient } from "../../database/client/getDatabaseClient";

const authSignIn = async (username: string, password: string) => {
    const query = authSignInQuery(username as string, password as string);

    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(query);
    await client.clean();
    if (result.rows.length > 0) {
        return { data: result.rows[0], success: true };
    } else {
        return { data: null, success: false };
    }
};

const authSignInQuery = (username: string, password: string) =>
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;

const getAuthSignInUrl = (password: string, username: string) =>
    `/api/auth/signIn?password=${password}&username=${username}`;

export { authSignIn, getAuthSignInUrl };
