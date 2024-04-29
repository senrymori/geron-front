import {
  createRootRouteWithContext,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { tokenService } from "../app/services/storage/Factory";
import { HeaderMenu } from "../components/HeaderMenu";
import { useAuth } from "../features/auth";
import { InitPage } from "../pages/init/InitPage";
import { RootRouteContext } from "../types/tanstack";

export const AUTH_PATH = ["/login", "/register"];

export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: () => {
    const { token, isAuthenticated } = useAuth();

    if (token && !isAuthenticated) {
      return <InitPage />;
    }

    return (
      <div className={"flex flex-col h-screen"}>
        <HeaderMenu />
        <div className={" flex flex-1 p-3"}>
          <Outlet />
        </div>
        <TanStackRouterDevtools />
      </div>
    );
  },
  beforeLoad: (options) => {
    if (
      !AUTH_PATH.includes(options.location.pathname) &&
      !tokenService.hasValue()
    ) {
      throw redirect({ to: "/login" });
    } else if (
      AUTH_PATH.includes(options.location.pathname) &&
      tokenService.hasValue()
    ) {
      throw redirect({ to: "/" });
    }
  },
});
