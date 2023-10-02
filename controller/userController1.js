import { User } from "../model/userModel.js";

export const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({
                "success": false,
                "message": 'email already exists'
            });
        }
        const newUser = await User.create({
            username,
            password,
            email
        })
        return res.status(201).json({
            "success": true,
            "message": newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            "success": true,
            "message": error.message
        })
    }
}
export const login = async (req, res) => {
    try {
        const email=req.body.email;
        const exisitingUser = await User.findOne({email});
        if (!exisitingUser) {
            return res.status(401).json({
                "success": false,
                "message": "user not found"
            });
        }
        if (req.body.password === exisitingUser.password) {
            return res.status(201).cookie("userId",exisitingUser._id).json({
                "success": true,
                "message": exisitingUser
            })
        }
        return res.status(401).json({
            "success": false,
            "message": "username or password is wrong"
        });
    } catch (error) {
        return res.status(401).json({
            "success": false,
            "message": error.message
        })
    }
}