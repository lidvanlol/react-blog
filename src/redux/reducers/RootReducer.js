import { combineReducers } from "redux";
import BlogPostReducer from "./BlogPostReducer";

const RootReducer = combineReducers({
  blogPosts: BlogPostReducer
});

export default RootReducer;
