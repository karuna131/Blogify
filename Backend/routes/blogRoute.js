const express = require("express");
const router = express.Router();

const {
    createBlog,
    getBlogs,
    getBlog,
    getMyBlogs,
    updateBlog,
    deleteBlog
} = require("../controllers/blogController");

router.post("/create_blog", createBlog);
router.get("/all_blogs", getBlogs);
router.get("/my_blogs", getMyBlogs);
router.get("/blog_details/:id", getBlog);
router.put("/update_blog/:id", updateBlog);
router.delete("/delete_blog/:id", deleteBlog);

module.exports = router;