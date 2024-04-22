import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { useAuth } from "../features/auth";
import { LinkText } from "../shared/ui/Typography";
import { Header } from "./Header";

export const HeaderMenu: FC = function HeaderMenu() {
  const { isAuthenticated } = useAuth();

  return (
    <Header>
      {!isAuthenticated ? (
        <div className="flex justify-center gap-12 ">
          <LinkText to="/login" text={"Авторизация"} />
          <LinkText to="/register" text={"Регистрация"} />
        </div>
      ) : (
        <></>
      )}
    </Header>
  );
};
