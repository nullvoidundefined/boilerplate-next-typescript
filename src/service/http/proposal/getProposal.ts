import { getDatabaseClient } from "../../database/getClient/getClient";

import { getProposalQuery } from "../../../service";

const getProposal = async (id: string) => {
    const client = getDatabaseClient();
    await client.connect();
    const query = getProposalQuery(id);
    const result = await client.query(query);
    await client.clean();
    if (result.rows.length > 0) {
        return { data: result.rows[0], success: true };
    } else {
        return { data: null, success: false };
    }
};

export { getProposal };
