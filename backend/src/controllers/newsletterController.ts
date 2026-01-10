import { Request, Response } from "express";
import { query } from "../config/database";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
});

export async function subscribeNewsletter(req: Request, res: Response) {
  try {
    const validated = newsletterSchema.parse(req.body);
    const { email, source } = validated;

    // Check if already subscribed
    const existing = await query(
      "SELECT * FROM newsletter_subscriptions WHERE email = $1",
      [email]
    );

    if (existing.rows.length > 0) {
      const subscription = existing.rows[0];
      if (subscription.is_active) {
        return res.status(400).json({ error: "Email already subscribed" });
      } else {
        // Reactivate subscription
        await query(
          `UPDATE newsletter_subscriptions
           SET is_active = true, subscribed_at = NOW(), unsubscribed_at = NULL
           WHERE email = $1
           RETURNING *`,
          [email]
        );
        return res.json({ message: "Successfully resubscribed to newsletter" });
      }
    }

    // Create new subscription
    const result = await query(
      `INSERT INTO newsletter_subscriptions (email, source)
       VALUES ($1, $2)
       RETURNING *`,
      [email, source || null]
    );

    res.status(201).json({
      message: "Successfully subscribed to newsletter",
      subscription: result.rows[0],
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error("Newsletter subscription error:", error);
    res.status(500).json({ error: "Failed to subscribe to newsletter" });
  }
}
