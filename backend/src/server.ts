import express, { Express, Request, Response, NextFunction } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import { pool } from "./config/database";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

// Handle OPTIONS requests FIRST - before any other middleware
app.options("*", (req: Request, res: Response) => {
  const origin = req.headers.origin;
  
  // Allow all origins in development
  if (process.env.NODE_ENV !== "production") {
    if (origin) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
    }
  } else {
    // In production, check against allowed origins
    const allowedOrigins = CORS_ORIGIN.split(",").map(o => o.trim());
    if (origin && (allowedOrigins.includes(origin) || allowedOrigins.includes("*"))) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
  }
  
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With, Accept, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Expose-Headers", "Authorization");
  res.status(200).end();
});

// CORS configuration - more permissive for development
const corsOptions: CorsOptions = {
  // In development, allow all origins; in production, use configured origins
  origin: process.env.NODE_ENV === "production"
    ? CORS_ORIGIN.split(",").map(o => o.trim())
    : true, // Allow all origins in development
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
    "Access-Control-Request-Method",
    "Access-Control-Request-Headers",
  ],
  exposedHeaders: ["Authorization"],
  optionsSuccessStatus: 200,
  preflightContinue: false,
};

// Apply CORS middleware for all requests
app.use(cors(corsOptions));

// Additional CORS headers middleware for all requests
app.use((req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;
  
  // Allow all origins in development
  if (process.env.NODE_ENV !== "production") {
    if (origin) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
    }
  } else {
    // In production, check against allowed origins
    const allowedOrigins = CORS_ORIGIN.split(",").map(o => o.trim());
    if (origin && (allowedOrigins.includes(origin) || allowedOrigins.includes("*"))) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
  }
  
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With, Accept, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Expose-Headers", "Authorization");
  
  next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", async (_req: Request, res: Response) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({ status: "ok", database: "connected" });
  } catch {
    res.status(500).json({ status: "error", database: "disconnected" });
  }
});

// API routes
import authRoutes from "./routes/auth";
import testimonialsRoutes from "./routes/testimonials";
import faqsRoutes from "./routes/faqs";
import newsletterRoutes from "./routes/newsletter";
import statsRoutes from "./routes/stats";

app.use("/api/auth", authRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/faqs", faqsRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/stats", statsRoutes);

app.get("/api", (_req: Request, res: Response) => {
  res.json({ message: "Quantum Mastery API" });
});

// Error handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`CORS enabled for: ${CORS_ORIGIN}`);
});
