import { createFileRoute } from "@tanstack/react-router";
import { ProjectFormPage } from "../../pages/projects/ProjectFormPage";

export const Route = createFileRoute("/projects/add")({
  component: ProjectFormPage,
});
