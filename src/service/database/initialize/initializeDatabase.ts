// Current DB initialization queries.

// CREATE TABLE users (
//     email VARCHAR ( 255 ) UNIQUE NOT NULL,
//     id serial PRIMARY KEY,
//     password VARCHAR ( 50 ) NOT NULL,
//     username VARCHAR ( 50 ) UNIQUE NOT NULL
// );
// INSERT INTO users(email, password, username)
//     VALUES ('root@root.com', 'swordfish', 'root');
// CREATE TABLE proposals (
//     id serial PRIMARY KEY,
//     id_public VARCHAR ( 50 ) UNIQUE NOT NULL,
//     name VARCHAR ( 50 ) NOT NULL,
//     description TEXT
// );
// INSERT INTO proposals(name, public_id)
//             VALUES ('Take Twelve Tylenol', 'take-twelve-tylenol');

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

export {
    initializeUsersTableQuery,
    initializeDefaultUserQuery,
    initializeProposalsTableQuery,
};
