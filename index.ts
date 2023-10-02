import mongoose from 'mongoose';
import {task} from './model/Task'
const express=require('express');
const uri = "mongodb+srv://lordprateekverma:rimFFlND5oxTl9NQ@cluster0.j2bcqvd.mongodb.net/TaskManagementTool?retryWrites=true&w=majority";
mongoose.connect(uri).then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})

const app=express();
const PORT:number=5000;
app.listen(PORT,()=>{
    console.log('Server Started at ',PORT);
});

task();
