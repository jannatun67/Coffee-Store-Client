import { Link } from "react-router-dom";
import error from "../../assets/images/404/404.gif"

const ErrorPage = () => {
    return (
        <div className="w-10/12 mx-auto ">
           <Link to="/"><h3 className="text-center font-semibold mt-4">Back to Home</h3></Link>

            <div className="flex justify-center items-center ">
                <img className="w-[600px]" src={error} alt="" />
            </div>

        </div>
    );
};

export default ErrorPage;