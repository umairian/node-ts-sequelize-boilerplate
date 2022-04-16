import { Request, Response } from "express"

export default {
    get: (req: Request, res: Response) => {
        res.status(200).send("Success!")
    }
}