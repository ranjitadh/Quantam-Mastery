import { Router } from "express";
import { getCommunityStats } from "../controllers/statsController";

const router = Router();

router.get("/", getCommunityStats);

export default router;
