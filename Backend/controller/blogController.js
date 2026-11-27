const Blog = require("../models/blogSchema");

const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: "Please enter title and content"
            });
        }

        if (title.length < 3) {
            return res.status(400).json({
                message: "Title must be at least 3 characters"
            });
        }

        const blog = await Blog.create({
            title,
            content,
            author: req.user._id
        });

        res.status(201).json({
            message: "Blog created successfully",
            blog
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json({ message: "Blog updated successfully", blog });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);


        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json({ message: "Blog deleted successfully" });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
};