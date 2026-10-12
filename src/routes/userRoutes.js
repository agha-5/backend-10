
import { Router } from "express";
import { getHome, getAbout, postUser, login, getSingleUser } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router()

router.get("/", getHome).get("/about", getAbout).post("/signup", postUser).post("/login", login).get("/dashboard/:id", authMiddleware, getSingleUser)


export default router;