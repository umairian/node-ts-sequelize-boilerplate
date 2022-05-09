import { Router } from "express";
const router: Router = Router();

// Routers
import userRouter from "./user";

router.use("/users", userRouter);

export default router;