import { createStore, combineReducers } from "redux";
import posts from "../Reducers/posts";
import user from "../Reducers/user";
import comments from "../Reducers/comments";
import userName from "../Reducers/userName";

const rootReducer = combineReducers({
  posts,
  user,
  comments,
  userName,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
