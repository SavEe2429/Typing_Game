import { Request, Response } from "express"

export const dashboardController = (req: Request, res: Response) => {
    res.status(200).json({
        message: "Approve"
    })
}