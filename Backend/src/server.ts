import express from 'express'
import cors from 'cors'
import authRoutes from "./routes/authRoutes"
import performRoutes from "./routes/performRoutes"
import trackRoutes from "./routes/trackRoutes"
import dotenv from 'dotenv'
import {conn} from './config/db'

dotenv.config();
const app = express();

app.use(cors({
    origin : process.env.FRONTEND_URL

}))

// readable json
app.use(express.json());

// connect db
conn();

app.use('/api' , authRoutes);
app.use('/api' , trackRoutes);
app.use('/api', performRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`Server running on port : ${PORT}`));