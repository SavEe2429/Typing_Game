import express from 'express';
import { TrackController } from '../controllers/trackController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/tracks/all',  TrackController.getTracks);

router.post('/tracks/add', TrackController.addTrack);

router.delete('/tracks/:id', verifyToken, TrackController.deleteTrack);

router.get('/tracks/generatewords', TrackController.generateWords);

export default router;