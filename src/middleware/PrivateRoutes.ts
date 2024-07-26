import { NextFunction,Response,Request } from "express";
import passport from "passport";
import { erro } from "../libs/passport";

type userInstance = {
    id:number,
    email:string,
    password:string
}

export const privateRoute = (req:Request,res:Response,next:NextFunction) => {
    const verifyToken = passport.authenticate("jwt",async (e:any,user:userInstance)=>{
        req.user = user;
        user ? next() : next(erro)
    })

    verifyToken(req,res,next)
}