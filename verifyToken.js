import jwt from "jsonwebtoken";
import { addError } from "./error.js";
export const verifyToken=(req,res,next)=>{
    const token = req.cookies.access_token
    console.log(token+"2")
    if(!token){
        return next(addError(401,"You are not authorised"))
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err){
            return next(addError(203,"Token Not Valid"));
        }
        req.user=user;
        next()
    })
}