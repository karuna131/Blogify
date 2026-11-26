const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
    const { title, content } = req.body;

    const blog = new Blog({
        title,
        content,
        author: req.body.userId
    });

}