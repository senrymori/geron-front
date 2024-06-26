import { useNavigate } from "@tanstack/react-router";
import { FC, useEffect } from "react";
import { apiService } from "../../app/services/api/ApiService";
import { useAuth } from "../../features/auth";
import { Profile } from "../../features/models/Profile";
import { Loader } from "../../shared/ui/Loader";

export const InitPage: FC = function InitPage() {
  const { token, resetToken, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    (async () => {
      try {
        const response = await apiService.get<Profile>({ url: "/profile" });

        setUser(response.data);
      } catch (error) {
        resetToken();
        navigate({
          to: "/login",
        });
      }
    })();
  }, [token]);

  return <Loader isFull={true} />;
};
