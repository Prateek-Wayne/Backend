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
export const Task=mongoose.model('Task',TaskSchema);