const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", [auth], getBlogs);
router.post("/", [auth], createBlog);
router.put("/:id", [auth], updateBlog);
router.delete("/:id", [auth], deleteBlog);

module.exports = router;
