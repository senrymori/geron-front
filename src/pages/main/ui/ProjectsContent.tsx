import { useNavigate } from "@tanstack/react-router";
import { FC } from "react";
import { Button } from "../../../shared/ui/Button";
import { Card } from "../../../shared/ui/Card";
import { COLORS_BACKGROUND } from "../../../shared/ui/colors";
import { Typography } from "../../../shared/ui/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { useGetProjects } from "../../projects/project-utils";

export const ProjectsContent: FC = function ProjectsContent() {
  const { data } = useGetProjects();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 mt-4">
      <Button onClick={() => navigate({ to: "/projects/add" })}>
        {"Создать проект"}
      </Button>
      <div className={"columns-2 gap-2"}>
        {data?.map((item) => (
          <Card
            key={item.id}
            className={`${COLORS_BACKGROUND.secondary100} mb-2`}
          >
            <div className="flex">
              <Typography
                className="flex-1 cursor-pointer"
                onClick={() =>
                  navigate({
                    to: "/projects/$projectId",
                    params: {
                      projectId: item.id,
                    },
                  })
                }
              >
                {item.name}
              </Typography>
              <EditIcon
                fontSize={"medium"}
                className={"cursor-pointer"}
                onClick={() =>
                  navigate({
                    to: "/projects/edit/$projectId",
                    params: {
                      projectId: item.id,
                    },
                  })
                }
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
