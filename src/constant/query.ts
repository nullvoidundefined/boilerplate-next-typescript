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
    id_public VARCHAR ( 50 ) UNIQUE NOT NULL,
    name VARCHAR ( 50 ) NOT NULL,
    description TEXT
);`;

const buildAuthSignInQuery = (username: string, password: string) =>
    `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;

const buildGetProposalByIdQuery = (id: string) =>
    `SELECT * FROM proposals WHERE id = '${id}';`;

const getProposalListQuery = `SELECT * FROM proposals;`;

const getProposalListPublicIdsQuery = `SELECT id_public FROM proposals;`;

export {
    buildAuthSignInQuery,
    buildGetProposalByIdQuery,
    getProposalListPublicIdsQuery,
    getProposalListQuery,
    initializeUsersTableQuery,
    initializeDefaultUserQuery,
    initializeProposalsTableQuery,
};
