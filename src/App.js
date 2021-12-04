// Libraries
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

// Firebase
import { firebase } from "./firebase/firebase.config";

// Pages
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Images from "./Pages/Images/Images";
import Videos from "./Pages/Videos/Videos";
import NotFound from "./Pages/NotFound/NotFound";

// Components
import Header from "./Components/Custom/Header/Header";

// actions
import { handleFillUserInfoAction } from "./redux/actions/login.action";

function App() {
  // State
  const [isInSession, setIsInSession] = useState(false);

  // Redux dispatch
  const dispatch = useDispatch();

  // Check if there is any user in session, if not, it only allow you to see Login and Register pages
  firebase.auth().onAuthStateChanged((user) => {
    if (user?.uid) {
      dispatch(
        handleFillUserInfoAction({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        })
      );
      setIsInSession(true);
    } else {
      setIsInSession(false);
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isInSession ? (
              <>
                <Header />
                <Home />
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          exact
          path="/login"
          render={() =>
            !isInSession ? (
              <>
                <Login />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />

        <Route
          exact
          path="/signup"
          render={() =>
            !isInSession ? (
              <>
                <Register />
              </>
            ) : (
              <Redirect to="/" />
            )
          }
        />

        <Route
          exact
          path="/images"
          render={() =>
            isInSession ? (
              <>
                <Header />
                <Images />
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          exact
          path="/videos"
          render={() =>
            isInSession ? (
              <>
                <Header />
                <Videos />
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          exact
          path="/profile"
          render={() =>
            isInSession ? (
              <>
                <Header />
                <Profile />
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
