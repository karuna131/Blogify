const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const userAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log('authHeader------------->>>> :', authHeader);

        if (!authHeader) {
            return res.status(401).json({
                message: "Please login first"
            });
        }

        const parts = authHeader.split(" ");

        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).json({
                message: "Invalid authorization format"
            });
        }

        const token = parts[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET );

        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        req.user = user;
        req.token = token;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Please login first"
        });
    }
};

module.exports = userAuth;