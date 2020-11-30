import { createStore, combineReducers } from "redux";
import posts from "../Reducers/posts";
import user from "../Reducers/user";
import comments from "../Reducers/comments";
import newComment from "../Reducers/newComment";
import image from "../Reducers/image";
import progress from "../Reducers/progress";
import caption from "../Reducers/caption";
import userName from "../Reducers/userName";
import email from "../Reducers/email";
import password from "../Reducers/password";

const rootReducer = combineReducers({
  posts,
  user,
  comments,
  newComment,
  image,
  progress,
  caption,
  userName,
  email,
  password,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
