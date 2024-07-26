import { RequestHandler } from "express";
import { getList, getUser, login, registerUser } from "../models/user";
import { Prisma } from "@prisma/client";
import { generateToken } from "../libs/passport";

export const register:RequestHandler = async (req, res) => {
    try {
        const {email,password} = req.body;

        if(email&&password){
            const user = await registerUser(email,password);
            const token = generateToken({email:email})
            res.status(200).json({ user,token })    
        }else{
            res.status(400).json({data:"dados invalidos" })
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ erro: e.code })
        }else{
            res.status(400).json({ erro: e })
        }
    }
}

export const singIn:RequestHandler =  async (req, res) => {

    const user = await login(req.body.email,req.body.password);
    if(user){
        const token = generateToken({email:user[0].email})
        return res.status(200).json({status:true,token})
    }else{
        return false
    }

   

}
export const showList:RequestHandler =  async (req, res) => {
    const users = await getList();

    return res.json({});
}