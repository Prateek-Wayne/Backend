import {Task} from '../model/taskModel1.js';

export const createTask=async(req,res)=>{
    try {
        const {taskname,discription}=req.body;
        const newTask=await Task.create({
            taskname,
            discription,
            deadline:new Date('12-12-2023'),
        });
        return res.status(201).json({
            "success":true,
            "message":"created",
        }) 
    } catch (error) {
        return res.status(201).json({
            "success":true,
            "message":error.message
        }) 
    }
}