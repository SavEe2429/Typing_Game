import express from "express";
import { loginController } from "../controllers/authController";

const router = express.Router();

router.post('/auth/login', loginController)
router.post('/auth/login', registerController)

export default router