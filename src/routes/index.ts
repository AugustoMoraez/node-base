import express from "express"
import { register,singIn,showList } from "../controllers/auth";
import { privateRoute } from "../middleware/PrivateRoutes";
import { ErroHandler } from "../controllers/erro";

const router = express.Router();

router.get("/ping", (req,res) => res.status(200).json({pong:true} ));

router.post("/register",register);
router.post("/login",singIn);
router.get("/list",privateRoute,showList);

router.use(ErroHandler);

export default router;