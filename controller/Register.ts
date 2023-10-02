const express=require('express');
const {Request,Response} =require('express')
import {User} from '../model/User';

export const registerUser=async(req:Request,res:Response)=>{
    try {
        const {username,password,email}=req.body;
    const user= await User.findOne(email);
    if(user)
    {
        return res.status(401).json({
            'success':false,
            'message':'email already exists'
        })
    
    }

    const newUser=await User.create({
        username,
        password,
        email,
    });
    return res.status(201).json({
        "success":true,
        "message":'successfully registerd'
    })

    } catch (error) {
        return res.status(401).json({
            "success":false,
            "message":error.message
        })
    }

}