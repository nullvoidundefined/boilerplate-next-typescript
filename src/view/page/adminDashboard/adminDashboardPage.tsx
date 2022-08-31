import { Button } from "../../design-system";

const AdminDashboardPage = () => {
    const initializeDatabase = async () => {
        fetch(`/api/database/initialize`)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };
    return (
        <>
            <h1>Admin Dashboard Page</h1>
            <Button onClick={initializeDatabase}>Initialize Database</Button>
        </>
    );
};

export { AdminDashboardPage };
