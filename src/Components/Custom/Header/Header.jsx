// Libraries
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { handleLogoutAction } from "../../../redux/actions/login.action";

const Header = () => {
  // Redux dispatch
  const dispatch = useDispatch();

  return (
    <header className={`h-16 bg-red flex justify-between items-center `}>
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white">
        <Link to="/">MEDIAPIC</Link>
      </h2>

      <ul className="w-1/4 flex justify-between items-center px-5 text-white font-semibold">
        <li>
          <Link to="/images">Pictures</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={() => dispatch(handleLogoutAction())}>
            Log Out
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
