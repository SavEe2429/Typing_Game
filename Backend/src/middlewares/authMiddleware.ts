import {Request , Response , NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request{
    user?:any;
}

// veriftoken 
export const verifyToken = (req : AuthRequest , res : Response , next : NextFunction) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1]; // รับค่ารูปแบบ bearer
    if(!token){
        return res.status(401).json({message : "Access Denined: No Token Provided"});
    }

    try{
        const verified = jwt.verify(token , process.env.JWT_SECRET as string)
        req.user = verified; //เก็บข้อมูล User ไว้ใน req เพื่อให้ Controller นำไปใช้ต่อ
        next(); //ทำงานต่อไป
    }catch(err:any){
        res.status(403).json({message : "Invalid Token"}) // token ผิด
    }
};

export const isAdmin = (req : AuthRequest , res : Response , next : NextFunction) => {
    if(req.user && req.user.role === 'ADMIN'){
        next();
    }else {
        res.status(403).json({message : "Access Denined : Admin Only"})
    }
}

// สำหรับจำกัดการ Login (เข้มงวดกว่า)
export const loginLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 ชั่วโมง
    max: 5, // ลองรหัสผ่านผิดได้แค่ 5 ครั้งต่อชั่วโมง
    message: {
        message: "Too many login attempts, please try again in an hour."
    }
});