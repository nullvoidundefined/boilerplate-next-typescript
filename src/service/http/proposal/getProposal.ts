import { queryDatabaseClient } from "../../database/client/queryDatabaseClient";

const getProposalViaServer = (id: string) => {
    const url = `/api/proposals?id=${id}`;
    return fetch(url).then((response) => response.json());
};

const getProposalViaDatabase = async (id: string) => {
    const query = `SELECT * FROM proposals WHERE id = '${id}';`;

    // IAN TODO: Fix this
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await queryDatabaseClient(query);
    if (result.rows.length > 0) {
        return { data: result.rows[0], success: true };
    } else {
        return { data: null, success: false };
    }
};

export { getProposalViaServer, getProposalViaDatabase };
