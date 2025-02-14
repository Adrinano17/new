import jwt from "jsonwebtoken";

const STORAGE_KEY = "auth_token";

export function saveToken(token) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, token);
  }
}

export function getUser() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(STORAGE_KEY);
    if (!token) return null;

    try {
      return jwt.decode(token);
    } catch {
      return null;
    }
  }
  return null;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}
