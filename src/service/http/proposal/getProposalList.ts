import { getDatabaseClient } from "../../database/getClient/getClient";

import { getProposalListQuery } from "../../../service";

const getProposalList = async () => {
    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(getProposalListQuery);
    await client.clean();
    if (result.rows) {
        return { data: result.rows, success: true };
    } else {
        return { data: null, success: false };
    }
};

export { getProposalList };
