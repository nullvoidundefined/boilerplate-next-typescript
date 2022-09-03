const signInQuery = (username: string, password: string) =>
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;

export { signInQuery };
