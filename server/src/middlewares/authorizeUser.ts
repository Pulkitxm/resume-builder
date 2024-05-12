import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { unHashPass } from "../utils/pass";
import User from "../models/User";

export default async function authorizeUser(req:Request,res:Response,next:NextFunction){
    const token = req.cookies?.token;
    if(!token){
        return res.status(401).json({
            message:"You are not authorized to access this route"
        });
    }
    const user = jwt.verify(token,process.env.JWT_SECRET as string) as jwt.JwtPayload;
    const password= user?.password;

    if(!password){
        return res.status(401).json({
            message:"You are not authorized to access this route"
        });
    }

    const StoredPUser= await User.findOne({email:user.email});
    if(!StoredPUser){
        return res.status(401).json({
            message:"You are not authorized to access this route"
        });
    }
    const StoredPass= StoredPUser.password;
    const DecodePass= jwt.verify(StoredPass,process.env.JWT_SECRET as string) as string;   

    if(unHashPass(DecodePass) !== unHashPass(password)){
        return res.status(401).json({
            message:"You are not authorized to access this route"
        });
    }
    const userId= StoredPUser._id;
    req.body.userId= userId;
    next();
};