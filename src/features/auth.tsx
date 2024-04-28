import { createContext, useContext, useEffect, useState } from "react";
import { apiService } from "../app/services/api/ApiService";
import { tokenService } from "../app/services/storage/Factory";
import { Profile } from "./models/Profile";

export interface AuthContext {
  isAuthenticated: boolean;
  user?: Profile;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<Profile>();
  const isAuthenticated = !!token;

  useEffect(() => {
    if (!tokenService.hasValue()) return;

    const localStorage = tokenService.getValue();

    apiService.saveBearerToken(token);
    setToken(localStorage.token);
  }, []);

  useEffect(() => {
    if (!token) return;

    (async () => {
      try {
        const response = await apiService.get<Profile>({ url: "/profile" });

        setUser(response.data);
      } catch (error) {}
    })();
  }, [token]);

  const handleSaveToken = (token: string) => {
    apiService.saveBearerToken(token);
    tokenService.setValue({
      token,
    });
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, setToken: handleSaveToken }}
    >
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
