import { Request, Response } from "express";
import { query } from "../config/database";

export async function getCommunityStats(req: Request, res: Response) {
  try {
    // Get total users
    const usersResult = await query("SELECT COUNT(*) as count FROM users");
    const totalUsers = parseInt(usersResult.rows[0].count, 10);

    // Get total active subscriptions
    const subscriptionsResult = await query(
      "SELECT COUNT(*) as count FROM subscriptions WHERE status = 'active'"
    );
    const activeSubscriptions = parseInt(subscriptionsResult.rows[0].count, 10);

    // Get total testimonials
    const testimonialsResult = await query(
      "SELECT COUNT(*) as count FROM testimonials WHERE is_active = true"
    );
    const totalTestimonials = parseInt(testimonialsResult.rows[0].count, 10);

    // Get average rating
    const ratingResult = await query(
      "SELECT AVG(rating) as avg_rating FROM testimonials WHERE is_active = true AND rating IS NOT NULL"
    );
    const avgRating = ratingResult.rows[0].avg_rating
      ? parseFloat(ratingResult.rows[0].avg_rating).toFixed(1)
      : null;

    res.json({
      stats: {
        totalTraders: totalUsers,
        activeSubscriptions: activeSubscriptions,
        totalTestimonials: totalTestimonials,
        averageRating: avgRating,
      },
    });
  } catch (error) {
    console.error("Get stats error:", error);
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
}
