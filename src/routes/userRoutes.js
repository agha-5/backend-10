
import { Router } from "express";
import { getHome, getAbout, postUser, login, getSingleUser } from "../controllers/userController.js";

const router = Router()

router.get("/", getHome).get("/about", getAbout).post("/signup", postUser).post("/login", login).get("/dashboard/:id", getSingleUser)


export default router;