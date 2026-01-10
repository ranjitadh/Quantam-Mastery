import { Request, Response } from "express";
import { query } from "../config/database";

export async function getTestimonials(req: Request, res: Response) {
  try {
    const { featured, limit } = req.query;
    let sql = "SELECT * FROM testimonials WHERE is_active = true";
    const params: unknown[] = [];
    const paramCount = 1;

    if (featured === "true") {
      sql += " AND is_featured = true";
    }

    sql += " ORDER BY created_at DESC";

    if (limit) {
      sql += ` LIMIT $${paramCount}`;
      params.push(parseInt(limit as string, 10));
    }

    const result = await query(sql, params.length > 0 ? params : undefined);

    res.json({ testimonials: result.rows });
  } catch (error) {
    console.error("Get testimonials error:", error);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
}

export async function createTestimonial(req: Request, res: Response) {
  try {
    const { name, role, content, rating, avatar_url } = req.body;

    if (!name || !content) {
      return res.status(400).json({ error: "Name and content are required" });
    }

    const result = await query(
      `INSERT INTO testimonials (name, role, content, rating, avatar_url)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, role || null, content, rating || null, avatar_url || null]
    );

    res.status(201).json({ testimonial: result.rows[0] });
  } catch (error) {
    console.error("Create testimonial error:", error);
    res.status(500).json({ error: "Failed to create testimonial" });
  }
}
