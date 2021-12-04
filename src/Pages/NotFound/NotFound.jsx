// Libraries
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col font-bold text-center text-3xl text-blueSoft">
      <h2 className="mt-40 text-8xl">Error: 404</h2>
      <p className="py-5 text-5xl">Page Not Found</p>

      <button className="bg-black bg-opacity-50 p-1 text-xl border-2 border-white rounded hover:bg-yellow">
        <Link to={`/`}>Go to Homepage</Link>
      </button>
    </div>
  );
};

export default NotFound;
