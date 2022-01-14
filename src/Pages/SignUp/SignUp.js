// Libraries
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import "../Login/Login.styles.css";

// actions
import { handleSignUpAction } from "../../redux/actions/login.action";

const SignUp = () => {
  const { message } = useSelector((store) => store.error);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(handleSignUpAction(userInfo));
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center lg:text-lg red-bg">
      <form
        className="w-5/6 sm:w-2/3 xl:w-1/3 h-5/6 m-auto flex flex-col justify-between items-center py-10 rounded-2xl bg-white login-container"
        onSubmit={handleSignUp}
      >
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">Sign Up</h2>
        {message && (
          <p className="w-11/12 font-semibold text-red text-center">
            {message.replace("Firebase:", "")}
          </p>
        )}
        <input
          type="text"
          placeholder="User name"
          className="w-3/4 py-2 px-1 textfield"
          onChange={(e) =>
            setUserInfo({ ...userInfo, userName: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Email"
          className="w-3/4 py-2 px-1 textfield"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-3/4 py-2 px-1 textfield"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <input
          type="submit"
          value="Create User"
          className="w-1/2 py-3 cursor-pointer hover:opacity-75 rounded-xl text-white red-bg"
        />
      </form>
    </div>
  );
};

export default SignUp;
