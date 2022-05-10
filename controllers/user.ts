import { Request, Response } from "express";
import Models from "../models";
const { Users } = Models;

export default {
    get: async (req: Request, res: Response) => {
        // const users = await Users.findAll();
        const user = await Users.create({
            name: "Umair Syed",
            email: "itsumairsyed@gmail.com",
            phone_number: "03434548624",
        });
        res.status(200).json(user)
    }
}