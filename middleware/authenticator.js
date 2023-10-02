import {User} from '../model/userModel.js';

export const authenticator=async(req,res,next)=>{
    try {
        const {token}=req.cookies;
        if(!token||token==null)
        {
            return res.status(401).json({
                "success":true,
                "message":"user is not logged in ,Please login :)"
            })
        }
        next();

    } catch (error) {
        return res.status(500).send({
            success:false,
            message:error.message,
            location:"Inside Authenticator catch block"
        })  
    }
}
