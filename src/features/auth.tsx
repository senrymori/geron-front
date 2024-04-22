import { createContext, useContext, useState } from "react";

export interface AuthContext {
  isAuthenticated: boolean;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string>("");
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("Приложение не обернуто в AuthProvider");
  }

  return context;
}
