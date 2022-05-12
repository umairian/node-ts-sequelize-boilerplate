import { Request, Response } from "express";
import Models from "../models";
const { Users } = Models;

export default {
    get: async (req: Request, res: Response) => {
        console.log(Users);
        res.status(200).json("Sunccess")
    }
}