import { queryDatabaseClient } from "../../database/client/queryDatabaseClient";

const getProposalListViaDatabase = async () => {
    const query = `SELECT * FROM proposals;`;
    // IAN TODO: Fix this
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await queryDatabaseClient(query);
    if (result.rows) {
        return { data: result.rows, success: true };
    } else {
        return { data: null, success: false };
    }
};

export { getProposalListViaDatabase };
