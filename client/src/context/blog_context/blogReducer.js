import * as ActionTypes from "../ContextActions";

export default (state, action) => {
  switch (action.type) {
    case ActionTypes.NEW_BLOG_SUCCESS:
      let blogs = state.blogs ? state.blogs : [];
      return {
        ...state,
        blogs: [...blogs, action.payload],
      };
    case ActionTypes.GET_BLOGS_SUCCESS:
      return {
        state,
        blogs: action.payload,
      };
    case ActionTypes.BLOGS_FAIL:
      return {
        ...state,
        toasts: action.payload,
      };
    case ActionTypes.UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload.id ? action.payload : blog
        ),
      };

    case ActionTypes.BLOG_DELETE:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload.id),
        toasts: action.payload.toasts,
      };

    case ActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        toasts: null,
      };
    default:
      return state;
  }
};
