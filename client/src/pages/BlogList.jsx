import React from "react";
import { useEffect } from "react";
import MainContainer from "../components/MainContainer";
import { useBlog } from "../middlewares/contextHooks";

const BlogList = () => {
  const { getBlogs, toasts, clearErrors, blogs } = useBlog();
  const [myBlogs, setMyBlogs] = React.useState([]);

  useEffect(() => {
    if (!blogs) {
      getBlogs();
    } else {
      setMyBlogs(blogs);
    }

    if (toasts) {
      toasts.forEach((ele) => {
        toasts(ele.message, { type: ele.type });
      });
    }
  }, [toasts, clearErrors, blogs, getBlogs]);
  return (
    <div>
      <MainContainer></MainContainer>
    </div>
  );
};

export default BlogList;
