require("dotenv").config();
const express = require("express");
const connectDB = require('./config/dbConnection')
const cors = require("cors");
const authRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use(cors());

app.get("/", (req, res) => {
    res.send("BLOGIFY Backend is Running!");
});

app.use("/api/user", authRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});