import { noop } from "lodash";
import { Button } from "../../design-system";

const AdminDashboardPage = () => {
    return (
        <>
            <h1>Admin Dashboard Page</h1>
            <Button onClick={() => noop()}>No action assigned</Button>
        </>
    );
};

export { AdminDashboardPage };
