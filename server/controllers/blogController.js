const Blog = require("../models/Blog");
const colors = require("colors");

const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({ user: req.user.id });
    res.json(blogs);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.underline.bold);
    res.status(500).send("Server Error");
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({
      title,
      content,
      user: req.user.id,
    });
    await newBlog.save();

    if (!newBlog)
      return res
        .status(400)
        .json([{ message: "blog not created.", type: "error" }]);
    res.json(newBlog);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.underline.bold);
    res.status(500).send("Server Error");
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, content },
      { new: true }
    );
    res.json(blog);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.underline.bold);
    res.status(500).send("Server Error");
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!blog) {
      res.status(400).json([
        {
          message: "cannot delete the blog",
          type: "error",
        },
      ]);
      return;
    }
    res
      .status(200)
      .json([{ message: "Blog deleted", type: "success", blog: blog }]);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.underline.bold);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  deleteBlog,
  updateBlog,
  createBlog,
  getBlogs,
};
