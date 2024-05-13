import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useGetProjectOne } from "../../pages/projects/project-utils";
import { ProjectOnePage } from "../../pages/projects/ProjectOnePage";
import { Loader } from "../../shared/ui/Loader";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectOneRoute,
});

function ProjectOneRoute() {
  const { projectId } = Route.useParams();

  const { data, isLoading } = useGetProjectOne(projectId);

  if (isLoading) return <Loader isFull={true} />;

  if (!data) {
    return <Typography align={"center"}>{"Проекта не существует"}</Typography>;
  }

  return <ProjectOnePage {...data} />;
}
