import express from 'express'
import router from "./routes/authRoutes";
import dotenv from 'dotenv'
import {conn} from './config/db'

dotenv.config();
const app = express();

// readable json
app.use(express.json());

// connect db
conn();

app.use('/api' , router);

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`Server running on port : ${PORT}`));