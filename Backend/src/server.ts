import express from 'express'
import cors from 'cors'
import authRoutes from "./routes/authRoutes"
import performRoutes from "./routes/performRoutes"
import trackRoutes from "./routes/trackRoutes"
import adminRoutes from './routes/adminRoutes'
import dotenv from 'dotenv'
import {conn} from './config/db'

// โหลดค่า Configuration จากไฟล์ .env เข้าสู่ process.env
dotenv.config();

const app = express();

// ตั้งค่า CORS เพื่ออนุญาตให้เฉพาะ Frontend URL ที่กำหนดเข้าถึง API ได้
app.use(cors({
    origin : process.env.FRONTEND_URL
}))

// Middleware สำหรับแปลง Body ของ Request ที่ส่งมาเป็น JSON (ทำให้ req.body อ่านได้)
app.use(express.json());

// เชื่อมต่อกับฐานข้อมูล (MongoDB) ผ่านฟังก์ชันที่ตั้งค่าไว้
conn();

/**
 * API Routes Setup
 * รวม Path ทั้งหมดไว้ภายใต้ '/api' prefix
 */
app.use('/api' , adminRoutes);   // จัดการระบบ Admin และการดูแลผู้เล่น
app.use('/api' , authRoutes);    // จัดการระบบ Login และ Register
app.use('/api' , trackRoutes);   // (ถ้ามี) ระบบติดตามการใช้งานหรือประวัติ
app.use('/api', performRoutes);  // จัดการการบันทึกและดึงคะแนน WPM/Accuracy

// กำหนด Port ของ Server โดยดึงจาก .env หรือใช้ค่าเริ่มต้นคือ 5000
const PORT = process.env.PORT || 5000;

// เริ่มรัน Server และแสดงข้อความยืนยันสถานะที่ Console
app.listen(PORT , () => console.log(`Server running on port : ${PORT}`));