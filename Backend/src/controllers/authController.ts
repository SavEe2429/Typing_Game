import { Request, Response } from 'express'
import { loginService, registerService } from '../services/authService';

export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await loginService({ email, password })
        res.status(200).json({ // 200 = OK
            message: "Login Sucessful", ...result
        })
    } catch (err: any) {
        res.status(401).json({ // 401 = unauthorized
            message: err.message || "Authentication Failed"
        });
    };
};


export const registerController = async (req: Request, res: Response) => {
    try {
        const { email, password, username } = req.body;
        const result = await registerService({ email, password, username });
        res.status(201).json({ // 201 = created
            message: "Register Successful"
        })
    } catch (err: any) {
        res.status(400).json({ // 400 = bad req
            message: err.message || "Register Failed"
        })
    }
}