// Libraries
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center font-bold text-3xl">
      <h2 className="mt-20 text-5xl sm:text-8xl">Error: 404</h2>
      <p className="py-5 text-3xl sm:text-5xl">Page Not Found</p>

      <button className="w-1/2 sm:w-1/6 p-4 rounded-xl bg-red text-white text-xl hover:opacity-75">
        <Link to={`/`}>Go to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
