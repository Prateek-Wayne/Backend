"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 20
    },
    email: {
        type: String,
        require: true,
        unique: true,
    }
});
exports.User = mongoose_1.default.model("User", UserSchema);
// export const add=async()=>{
//     try {
//         const newUser=await User.create({
//             username:'Shree Ram',
//             password:'123456',
//             email:'ShreeRam@Ram.com'
//         });
//         console.log("added : ",newUser );
//     } catch (error) {
//         console.log(error);
//     }
// };
