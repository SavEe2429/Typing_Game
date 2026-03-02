import { addWords, DeleteWord, GenerateWords, getAllWords } from "../controllers/trackController";
import express from 'express'

const router = express.Router();

router.post('/track/add', addWords);
router.get('/track/generatewords', GenerateWords )
router.delete('/track/delete/:id', DeleteWord)
router.get('/track/all', getAllWords);

export default router;