import  express  from "express";
import { isAdmin, verifyToken } from "../middlewares/authMiddleware";
import { deleteController, editController, userController } from "../controllers/userController";
import { dashboardController } from "../controllers/dashboardController";

const router = express.Router();

router.post('/dashboard' , verifyToken ,isAdmin , dashboardController);
router.get('/users' , verifyToken ,isAdmin,userController);
router.patch('/users/edit/' , verifyToken ,isAdmin, editController);
router.delete('/users/:email' , verifyToken ,isAdmin,deleteController);

export default router;