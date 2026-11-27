const express = require("express");
const router = express.Router();

const authentication = require("../middleware/userAuth");

const {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
} = require("../controller/blogController");


router.post("/create_blog", authentication, createBlog);
router.put("/update_blog/:id", authentication, updateBlog);
router.delete("/delete_blog/:id", authentication, deleteBlog);

router.get("/all_blogs", getBlogs);
router.get("/blog_details/:id", getBlog);

module.exports = router;