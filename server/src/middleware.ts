import type { Request,Response,NextFunction } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken'



export const userMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const header=req.headers["authorization"];
    const decoded=jwt.verify(header as string ,process.env.JWT_PASSWORD!)
    if(decoded){
        req.userId=(decoded as JwtPayload).id;
        next();
    }else{
        res.status(401).json({
            message:"you are not logged in"
        });
    }
}