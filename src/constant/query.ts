const initializeUsersTableQuery = `CREATE TABLE users (
    created TIMESTAMP NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
    id serial PRIMARY KEY,
    password VARCHAR ( 50 ) NOT NULL,
    username VARCHAR ( 50 ) UNIQUE NOT NULL
);`;

const initializeDefaultUserQuery = `
    INSERT INTO users(created, email, password, username) 
    VALUES (CURRENT_TIMESTAMP, 'root@root.com', 'swordfish', 'root');
`;

const initializeProposalsTableQuery = `CREATE TABLE proposals (
    id serial PRIMARY KEY,
    name VARCHAR ( 50 ) NOT NULL,
    publicId VARCHAR ( 50 ) UNIQUE NOT NULL,
    description TEXT
);`;

const buildAuthSignInQuery = (userName: string, password: string) =>
    `SELECT * FROM users WHERE username = '${userName}' AND password = '${password}';`;

export {
    buildAuthSignInQuery,
    initializeUsersTableQuery,
    initializeDefaultUserQuery,
    initializeProposalsTableQuery,
};
