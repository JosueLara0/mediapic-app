// Libraries
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// React icons
import {
  AiFillPicture,
  AiOutlineCloseCircle,
  AiFillAppstore,
} from "react-icons/ai";
import { MdVideoLibrary, MdOutlineLogout, MdHome } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

// Styles
import "./Header.styles.css";

// actions
import { handleLogoutAction } from "../../../redux/actions/login.action";

const Header = () => {
  const [menu, setShowMenu] = useState(false);

  // Redux dispatch
  const dispatch = useDispatch();

  // Toggle button functions
  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="header text-white bg-red">
      <nav className="nav h-20 w-10/12">
        <h2 className="nav__logo font-bold text-xl sm:text-2xl md:text-3xl">
          <Link to="/">MEDIAPIC</Link>
        </h2>

        <div className={`nav__menu ${menu ? "show-menu" : ""}`}>
          <ul className="nav__list font-semibold text-lg md:space-x-2">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <MdHome className="nav__icon"></MdHome> Home
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/pictures" className="nav__link">
                <AiFillPicture className="nav__icon"></AiFillPicture> Pictures
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/videos" className="nav__link">
                <MdVideoLibrary className=" nav__icon"></MdVideoLibrary> Videos
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/profile" className="nav__link">
                <FaUserAlt className=" nav__icon"></FaUserAlt> Profile
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/login"
                onClick={() => dispatch(handleLogoutAction())}
                className="nav__link "
              >
                <MdOutlineLogout className="nav__icon"></MdOutlineLogout> Log
                Out
              </Link>
            </li>
          </ul>

          <AiOutlineCloseCircle
            onClick={() => handleCloseMenu()}
            className="nav__close text-2xl"
          ></AiOutlineCloseCircle>
        </div>

        <AiFillAppstore
          onClick={() => handleShowMenu()}
          className={`nav__toggle text-3xl cursor-pointer ${
            menu ? "hidden" : "block"
          } `}
        ></AiFillAppstore>
      </nav>
    </header>
  );
};

export default Header;
