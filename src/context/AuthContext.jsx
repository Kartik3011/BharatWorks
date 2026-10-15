import React, { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../lib/useLocalStorage";

// This is a demo-only auth system: there's no server, so "signing in" just
// stores a display name + role in localStorage. It's enough to make the
// dashboard, messages, and "post a job" flows feel real without a backend.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage("bw_user", null);

  const value = useMemo(
    () => ({
      currentUser,
      login: (username, isSeller) => setCurrentUser({ username, isSeller }),
      logout: () => setCurrentUser(null),
      setRole: (isSeller) =>
        setCurrentUser((prev) => (prev ? { ...prev, isSeller } : prev)),
    }),
    [currentUser, setCurrentUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
