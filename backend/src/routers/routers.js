import { registerUser ,read , updateUser , deleteUser } from "../controllers/user.controllers.js";
import express from "express";
const router = express.Router();


router.post("/register" , registerUser);
router.get("/read" , read);
router.put("/update" , updateUser);
router.delete("/delete" , deleteUser);


export default router;      