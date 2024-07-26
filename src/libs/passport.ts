import passport from "passport";
import dotenv from "dotenv";
import {Strategy as JWTStrategy,ExtractJwt,StrategyOptions} from "passport-jwt";
import { prisma } from "./prisma";
import  jwt  from "jsonwebtoken";

dotenv.config();

export const erro = {code:401,message:"sem autorização"}

export const generateToken = (data:object) => {
    return jwt.sign(data,process.env.JWT_KEY as string)
}

const options:StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY as string
}
 
passport.use(new JWTStrategy(options,async (payload,done)=>{
    const user = await prisma.users.findUnique({where:{email:payload.email}})
    if(user){
        done(null,user)
    }else{
        done(erro,false)
    }
}));


export default passport;