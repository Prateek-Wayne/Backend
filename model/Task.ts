import mongoose from "mongoose";

const TaskSchema= new mongoose.Schema({
    taskname:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:false,
        min:1
    },
    deadline:{
        type:Date,
        require:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      }
},
{ timestamps: true }
);
const Task=mongoose.model('Task',TaskSchema);
export const task=async()=>{
    try {
        const newTask=await Task.create({
            taskname:'Watch GOT',
            discription:'Watch three episode today',
            user:'65197e112a7b477bf0d02934',
            deadline:new Date('2023-12-31')
        });
        console.log(newTask);
    } catch (error) {
        console.log(error);
    }
}
