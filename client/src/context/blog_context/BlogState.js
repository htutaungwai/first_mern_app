import React from "react";
import { createContext, useReducer } from "react";
import axios from "axios";
import blogReducer from "./blogReducer";
import * as ActionTypes from "../ContextActions";

export const BlogContext = createContext();

export default function BlogState(props) {
  const initialState = {
    blogs: null,
    currentBlog: null,
    toasts: null,
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  const config = {
    header: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  const getBlogs = async () => {};

  const getBlogId = async (blogId) => {};

  const createBlog = async (blogData) => {};

  const updateBlog = async (blogId) => {};

  const deleteBlog = async (blogId) => {};

  const clearErrors = async () => {};

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        currentBlog: state.currentBlog,
        toasts: state.toasts,
        getBlogs,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}

//  #region ________________[ Actions ]____________________
