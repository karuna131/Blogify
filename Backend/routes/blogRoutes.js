const express = require("express");
const router = express.Router();

const {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
} = require("../controller/blogController");

router.post("/create_blog", createBlog);
router.get("/all_blogs", getBlogs);
router.get("/blog_details/:id", getBlog);
router.put("/update_blog/:id", updateBlog);
router.delete("/delete_blog/:id", deleteBlog);


module.exports = router;