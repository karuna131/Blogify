const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;

        if (!fullName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password and confirm password do not match"
            });
        }

        const existingUser = await User.findOne({email});
        console.log('existingUser :', existingUser);
        if (existingUser) {
            return res.status(409).json({
                message: "Email is already exist, Please try with another email"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            full_name: fullName,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                fullName: user.full_name,
                email: user.email
            }
        });

    } catch (error) {
        console.log("error", error.message);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};


const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({email});

        if (!user){
            return res.status(401).json({
                message: "User not found, Please enter valid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Please check your password again."
            });
        }

        const token = jwt.sign({userId: user._id, email: user.email}, process.env.Secret_Key, { expiresIn: "1d"});

        await User.updateOne({ _id: user._id}, {token: token});

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                fullName: user.full_name,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};


module.exports = {
    signUp,
    login
};