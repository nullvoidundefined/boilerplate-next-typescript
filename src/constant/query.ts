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

const initializeProposalsTableQuery = `CREATE TABLE users (
    created TIMESTAMP NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
    id serial PRIMARY KEY,
    password VARCHAR ( 50 ) NOT NULL,
    username VARCHAR ( 50 ) UNIQUE NOT NULL
);`;

export {
    initializeUsersTableQuery,
    initializeDefaultUserQuery,
    initializeProposalsTableQuery,
};
