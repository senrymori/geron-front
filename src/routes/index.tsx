import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: MainRoute,
  staticData: {
    title: "Главный экран",
  },
});

function MainRoute() {
  return <></>;
}
