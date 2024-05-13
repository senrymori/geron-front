import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { FC } from "react";
import { AuthProvider, useAuth } from "../features/auth";
import { routeTree } from "../routeTree.gen";
import { ModalProvider } from "../shared/context/ModalProvider";

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    isAuthenticated: false,
  },
});

export const queryClient = new QueryClient();

const InnerApp: FC = function InnerApp() {
  const { isAuthenticated } = useAuth();
  return <RouterProvider router={router} context={{ isAuthenticated }} />;
};

export const InitializeApp: FC = function InitializeApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AuthProvider>
          <InnerApp />
        </AuthProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
};
