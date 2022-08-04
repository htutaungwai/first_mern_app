import * as ActionTypes from "../ContextActions";

export default (state, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_FAIL:
    case ActionTypes.LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        toasts: action.payload,
        currentUser: null,
        token: null,
      };
    case ActionTypes.AUTH_ERROR:
      return {
        ...state,
        toasts: action.payload,
      };

    case ActionTypes.LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        currentUser: null,
      };

    case ActionTypes.REGISTER_SUCCESS:
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
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
