import { getDatabaseClient } from "../../utility/getClient";
import { buildGetProposalByIdQuery } from "../../../../constant";

const getProposalById = async (id: string) => {
    const getProposalQuery = buildGetProposalByIdQuery(id);
    const client = getDatabaseClient();
    await client.connect();
    const result = await client.query(getProposalQuery);
    await client.clean();
    if (result.rows.length > 0) {
        return { data: result.rows[0], success: true };
    } else {
        return { data: null, success: false };
    }
};

export { getProposalById };
