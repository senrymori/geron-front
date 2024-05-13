import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useGetProjectOne } from "../../pages/projects/project-utils";
import { ProjectFormPage } from "../../pages/projects/ProjectFormPage";
import { Loader } from "../../shared/ui/Loader";

export const Route = createFileRoute("/projects/edit/$projectId")({
  component: ProjectEditRoute,
});

function ProjectEditRoute() {
  const { projectId } = Route.useParams();

  const { data, isLoading } = useGetProjectOne(projectId);

  if (isLoading) return <Loader isFull={true} />;

  if (!data) {
    return <Typography align={"center"}>{"Проекта не существует"}</Typography>;
  }

  return <ProjectFormPage project={data} />;
}
