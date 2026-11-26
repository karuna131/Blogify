const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userAuth = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        if (!authHeader) {
            return res.status(401).json({
                message: "Please authenticate."
            });
        }

        const token = authHeader.replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.Secret_Key);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({
                message: "User not found."
            });
        }

        req.user = user;
        req.token = token;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Please authenticate."
        });
    }
};

module.exports = userAuth;