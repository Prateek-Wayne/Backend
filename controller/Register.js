"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const User_1 = require("../model/User");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const user = yield User_1.User.findOne(email);
        if (user) {
            return res.status(401).json({
                'success': false,
                'message': 'email already exists'
            });
        }
        const newUser = yield User_1.User.create({
            username,
            password,
            email,
        });
        return res.status(201).json({
            "success": true,
            "message": 'successfully registerd'
        });
    }
    catch (error) {
        return res.status(401).json({
            "success": false,
            "message": error.message
        });
    }
});
exports.registerUser = registerUser;
