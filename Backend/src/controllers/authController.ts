import {Request , Response} from  'express'
import { loginService } from '../services/authService';

export const loginController = async (req : Request , res : Response ) => {
    try{
        const {email , password} = req.body;
        const result = await loginService({email , password})
        res.status(200).json({
            message : "Login Sucessful",...result
        })
    }catch(err : any){
        res.status(401).json({
            message : err.message || "Authentication Failed"
        });
    };
};

export const registerController = async (req : Request , res : Response) => {
    try{
        const {email , password , username } = req.body;
    }catch (err : any){

    }
}