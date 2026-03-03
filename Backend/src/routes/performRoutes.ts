import express from 'express';
import { PerformanceController } from '../controllers/performController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/performance/save', verifyToken , PerformanceController.savePerformance);
router.get('/performance', PerformanceController.getPerformance);

export default router;