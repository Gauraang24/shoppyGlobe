
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-9xl font-bold text-red-500">404</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mt-2">
                The page you're looking for doesn't exist or was removed.
                Go back to the homepage.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
                Go Home
            </Link>
        </div>
    );
};

export default PageNotFound
