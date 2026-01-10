import { Router } from "express";
import { getFAQs, createFAQ } from "../controllers/faqsController";
import { authenticateToken, requireRole } from "../middleware/auth";

const router = Router();

router.get("/", getFAQs);
router.post("/", authenticateToken, requireRole("admin"), createFAQ);

export default router;
