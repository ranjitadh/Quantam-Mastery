import { Router } from "express";
import { getTestimonials, createTestimonial } from "../controllers/testimonialsController";
import { authenticateToken, requireRole } from "../middleware/auth";

const router = Router();

router.get("/", getTestimonials);
router.post("/", authenticateToken, requireRole("admin"), createTestimonial);

export default router;
