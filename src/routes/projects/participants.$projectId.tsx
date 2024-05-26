import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useGetParticipantsProject } from "../../pages/projects/project-utils";
import { ProjectParticipants } from "../../pages/projects/ProjectParticipants";
import { Loader } from "../../shared/ui/Loader";

export const Route = createFileRoute("/projects/participants/$projectId")({
  component: ProjectOneRoute,
});

function ProjectOneRoute() {
  const { projectId } = Route.useParams();

  const { data, isLoading } = useGetParticipantsProject(projectId);

  if (isLoading) return <Loader isFull={true} />;

  if (!data) {
    return <Typography align={"center"}>{"Проекта не существует"}</Typography>;
  }

  return <ProjectParticipants data={data} projectId={projectId} />;
}
