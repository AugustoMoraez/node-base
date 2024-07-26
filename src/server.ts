import express from "express"
import mainRouter from "./routes"

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use(mainRouter)

server.listen(3000,()=> console.log("http://localhost:3000") )