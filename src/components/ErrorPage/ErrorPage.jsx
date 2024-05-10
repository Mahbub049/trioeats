import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <img className="w-1/4 h-1/4" src="/src/assets/404.gif" alt="" />
            <Link to={'/'} className="btn bg-[#A75D5D] text-white">Go Back</Link>
        </div>
    );
};

export default ErrorPage;