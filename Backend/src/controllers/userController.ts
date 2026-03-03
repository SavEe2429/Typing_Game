import { Request, Response } from "express";
import { userDeleteService, userEditService, userService } from "../services/userService";

export const userController = async (req: Request, res: Response) => {
    try {
        const result = await userService();
        return res.status(200).json(result)
    } catch (err: any) {
        return res.status(401).json({
            message: err.message || "Fetch Error"
        })
    }
}

export const editController = async (req: Request, res: Response) => {
    try {
        const { email, username, password, role } = req.body;
        const result = await userEditService({ email, username, password, role });
        return res.status(200).json(result)
    } catch (err: any) {
            return res.status(401).json({
                message: err.message || "Edit Error"
            })
    }
}

export const deleteController = async (req : Request , res : Response) => {
    try{
        const email = req.params.email;
        console.log("here")
        const result = await userDeleteService(email);
        return res.status(200).json(result);
    }catch(err:any){
        return res.status(401).json({
            message : err.message || "Delete Error"
        })
    }
}