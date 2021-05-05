import {
  ADD_BLOG_POST,
  GET_BLOG_POST_LIST,
  GET_BLOG_POST_LIST_BY_CATEGORY,
} from "../actions/types";

const initialState = {
  resultData: [],
};

const BlogPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return {
        ...state,
        resultData: [action.payload],
      };
    case GET_BLOG_POST_LIST:
      return {
        ...state,
        resultData: [...action.payload],
      };
    case GET_BLOG_POST_LIST_BY_CATEGORY:
      return {
        ...state,
        resultData: [...action.payload],
      };
    default:
      return state;
  }
};

export default BlogPostReducer;
