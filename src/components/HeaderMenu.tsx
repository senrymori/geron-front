import { useRouterState } from "@tanstack/react-router";
import { FC } from "react";
import { useAuth } from "../features/auth";
import { AUTH_PATH } from "../routes/__root";
import { LinkText } from "../shared/ui/Typography";
import { Header } from "./Header";

export const HeaderMenu: FC = function HeaderMenu() {
  const { isAuthenticated } = useAuth();
  const routes = useRouterState();

  return (
    <Header>
      {!isAuthenticated && AUTH_PATH.includes(routes.location.pathname) ? (
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
