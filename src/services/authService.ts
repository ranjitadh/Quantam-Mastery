import { apiClient } from "@/lib/api";
import type { AppUser } from "@/types/auth";

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export async function signUpWithEmail(email: string, password: string) {
  const response = await apiClient.post<AuthResponse>("/api/auth/register", {
    email,
    password,
  });

  if (response.error) {
    throw new Error(response.error);
  }

  if (response.data) {
    // Store token
    if (typeof window !== "undefined") {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  }

  throw new Error("Registration failed");
}

export async function signInWithEmail(email: string, password: string) {
  const response = await apiClient.post<AuthResponse>("/api/auth/login", {
    email,
    password,
  });

  if (response.error) {
    throw new Error(response.error);
  }

  if (response.data) {
    // Store token
    if (typeof window !== "undefined") {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  }

  throw new Error("Login failed");
}

export async function signOut() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}

export async function getCurrentUser(): Promise<AppUser | null> {
  const response = await apiClient.get<{
    id: string;
    email: string;
    role: string;
  }>("/api/auth/me");

  if (response.error || !response.data) {
    // Clear invalid token
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    return null;
  }

  return {
    id: response.data.id,
    email: response.data.email,
    role: response.data.role as AppUser["role"],
  };
}

