// Libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// React icons
import { AiFillGooglePlusCircle } from "react-icons/ai";

// Styles
import "./Login.styles.css";

// actions
import {
  handleGoogleLoginAction,
  handleLoginWithEmailAction,
} from "../../redux/actions/login.action";

const Login = () => {
  // States
  const [values, setValues] = useState({ emailForm: "", password: "" });

  // Bring error message from the error reducer
  const { message } = useSelector((store) => store.error);

  // Redux dispatch
  const dispatch = useDispatch();

  // Firebase function that handle login with google user
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(handleGoogleLoginAction());
  };

  // Firebase function that handle login with an email given
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    dispatch(handleLoginWithEmailAction(values));
  };

  return (
    <div className="w-full py-2 h-screen flex justify-center items-center bg-white_bg">
      <div className="w-11/12 xl:w-2/3 h-5/6 flex flex-col-reverse sm:flex-row overflow-auto login-container sm:text-lg lg:text-xl">
        <form
          className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center space-y-4 m-auto pb-2 bg-white"
          onSubmit={handleLoginWithEmail}
        >
          <h2 className="mt-8 sm:mt-0 font-bold text-2xl md:text-4xl lg:text-5xl">
            Log In
          </h2>
          <div className="flex flex-col justify-center items-center space-y-1">
            <p className="text-">With Google</p>

            <AiFillGooglePlusCircle
              alt="Login with Google"
              onClick={handleGoogleLogin}
              className="cursor-pointer text-red text-4xl sm:text-5xl hover:text-opacity-75"
            />
          </div>

          {message && (
            <p className="w-11/12 font-semibold text-red text-center">
              {message.replace("Firebase:", "")}
            </p>
          )}
          <p className="text-center">Or use your account</p>
          <input
            type="text"
            placeholder="Email"
            className="w-3/4 py-2 px-1 textfield"
            onChange={(e) =>
              setValues({ ...values, emailForm: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-3/4 py-2 px-1 textfield"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <input
            type="submit"
            value="Log in"
            className="w-5/12 py-2 cursor-pointer hover:opacity-75 rounded-lg text-white red-bg"
          />
        </form>

        <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-center space-y-4 sm:space-y-8 m-auto pb-3 text-center text-white red-bg">
          <h2 className="font-bold text-center text-2xl md:text-4xl lg:text-5xl">
            Hello, Friend!
          </h2>
          <p className="w-2/3 m-auto">
            Enter your personal details and start journey with us
          </p>

          <p>
            <Link
              to="/signup"
              className="px-10 sm:px-16 py-2 sm:py-4 rounded-3xl hover:opacity-75 sign-up-button"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
