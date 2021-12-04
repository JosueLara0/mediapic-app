// Libraries
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import { loginReducer } from "../reducers/login.reducer";
import { errorReducer } from "../reducers/error.reducer";
import { profileReducer } from "../reducers/profile.reducer";

// CombineReducers
const reducers = combineReducers({
  session: loginReducer,
  error: errorReducer,
  profile: profileReducer,
});

// Show redux devTools in browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create and export store
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
