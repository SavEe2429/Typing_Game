import express from "express";
import { loginController, registerController } from "../controllers/authController";
import { isAdmin, loginLimiter, verifyToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.post('/auth/login', loginLimiter,loginController)
router.post('/auth/register', registerController)

export default router