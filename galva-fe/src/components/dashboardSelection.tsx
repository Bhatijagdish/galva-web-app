
import { useNavigate } from 'react-router-dom';

function DashboardSelection() {
    const history = useNavigate();

    const navigateToDashboard = (dashboardURL: string) => {
        history(dashboardURL);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4">Select Dashboard</h2>
                <button
                    onClick={() => navigateToDashboard('/user-management')}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2 block w-full text-center"
                >
                    User Management
                </button>
                <button
                    onClick={() => navigateToDashboard('/pdf-management')}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 block w-full text-center"
                >
                    PDF Management
                </button>
            </div>
        </div>
    );
}

export default DashboardSelection;
