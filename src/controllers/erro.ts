import { ErrorRequestHandler } from "express";

export const ErroHandler:ErrorRequestHandler =  async (erro,req, res,next) => {
    if(erro.status){
        res.status(erro.status)
    }else{
        res.status(400)
    }

    if(erro.message){
        res.json({erro:erro.message})
    }else{
        res.json({erro:"ocorreu algum erro"})
    }
}