import { User } from "../model/UserModel";

export const register = async (req, res) => {
    try {
        const existingUser = await User.findOne(req.email);
        if (existingUser) {
            return res.status(401).json({
                "success": false,
                "message": 'email already exists'
            });
        }
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        })
        return res.status(201).json({
            "success": true,
            "message": newUser
        })
    } catch (error) {
        return res.status(401).json({
            "success": true,
            "message": error.message
        })
    }
}
export const login = async (req, res) => {
    try {
        const exisitingUser = await User.findOne(req.body.username);
        if (!exisitingUser) {
            return res.status(401).json({
                "success": false,
                "message": "user not found"
            });
        }
        return res.status(201).json({
            "success": true,
            "message": exisitingUser
        })
    } catch (error) {
        return res.status(401).json({
            "success": false,
            "message": error.message
        })
    }
}