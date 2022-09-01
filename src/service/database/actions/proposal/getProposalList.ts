import { getDatabaseClient } from "../../utility/getClient";
import { getProposalListQuery } from "../../../../constant";

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
