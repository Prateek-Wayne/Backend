import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({

    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:6,
        max:20
    },
    email:{
        type:String,
        require:true,
        unique:true,
    }
});
export const User=mongoose.model("User",UserSchema);
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