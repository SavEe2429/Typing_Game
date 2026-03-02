import express from 'express';
import { PerformanceController } from '../controllers/performController';

const router = express.Router();

router.post('/performance/save', PerformanceController.getPerformance);

export default router;