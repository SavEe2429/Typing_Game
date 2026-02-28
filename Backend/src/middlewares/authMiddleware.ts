import {Request , Response , NextFunction } from 'express';
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