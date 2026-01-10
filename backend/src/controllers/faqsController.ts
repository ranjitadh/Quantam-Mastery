import { Request, Response } from "express";
import { query } from "../config/database";

export async function getFAQs(req: Request, res: Response) {
  try {
    const { category } = req.query;
    let sql = "SELECT * FROM faqs WHERE is_active = true";
    const params: unknown[] = [];
    let paramCount = 1;

    if (category) {
      sql += ` AND category = $${paramCount}`;
      params.push(category);
      paramCount++;
    }

    sql += " ORDER BY order_index ASC, created_at DESC";

    const result = await query(sql, params.length > 0 ? params : undefined);

    res.json({ faqs: result.rows });
  } catch (error) {
    console.error("Get FAQs error:", error);
    res.status(500).json({ error: "Failed to fetch FAQs" });
  }
}

export async function createFAQ(req: Request, res: Response) {
  try {
    const { question, answer, category, order_index } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ error: "Question and answer are required" });
    }

    const result = await query(
      `INSERT INTO faqs (question, answer, category, order_index)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [question, answer, category || null, order_index || 0]
    );

    res.status(201).json({ faq: result.rows[0] });
  } catch (error) {
    console.error("Create FAQ error:", error);
    res.status(500).json({ error: "Failed to create FAQ" });
  }
}
