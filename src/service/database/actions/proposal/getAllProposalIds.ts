import { getDatabaseClient } from "../../utility/getClient";
import { getProposalListPublicIdsQuery } from "../../../../constant";

const getAllProposalIds = async () => {
    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(getProposalListPublicIdsQuery);
    await client.clean();

    if (result.rows) {
        return ["take-two-tylenol"]; // TDOD: remove this hardcoded value
    } else {
        return { data: null, success: false };
    }
};

export { getAllProposalIds };
