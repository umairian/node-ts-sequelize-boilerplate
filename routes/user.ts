import { Router } from "express";
const router = Router();

// Controllers
import controller from "../controllers/user";

router.get("/", controller.get);

export default router;