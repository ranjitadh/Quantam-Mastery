import { query } from "../config/database";
import bcrypt from "bcryptjs";

export interface User {
  id: string;
  email: string;
  password_hash: string;
  role: string;
  email_verified: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserData {
  email: string;
  password: string;
  role?: string;
}

export class UserModel {
  static async findByEmail(email: string): Promise<User | null> {
    const result = await query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0] || null;
  }

  static async findById(id: string): Promise<User | null> {
    const result = await query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0] || null;
  }

  static async create(data: CreateUserData): Promise<User> {
    const passwordHash = await bcrypt.hash(data.password, 10);
    const role = data.role || "user";

    const result = await query(
      `INSERT INTO users (email, password_hash, role)
       VALUES ($1, $2, $3)
       RETURNING id, email, role, email_verified, created_at, updated_at`,
      [data.email, passwordHash, role]
    );

    return result.rows[0];
  }

  static async verifyPassword(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  static async updateRole(userId: string, role: string): Promise<User> {
    const result = await query(
      `UPDATE users SET role = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING id, email, role, email_verified, created_at, updated_at`,
      [role, userId]
    );

    return result.rows[0];
  }
}
