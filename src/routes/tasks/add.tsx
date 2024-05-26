import { createFileRoute } from "@tanstack/react-router";
import { TaskFormPage } from "../../pages/tasks/TaskFormPage";

interface Filter {
  projectId: string;
}

export const Route = createFileRoute("/tasks/add")({
  component: TaskFormPage,
  validateSearch: (search: Record<string, unknown>): Filter => {
    return {
      projectId: (search?.projectId as string) || "",
    };
  },
});
