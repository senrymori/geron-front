import { useNavigate } from "@tanstack/react-router";
import { FC } from "react";
import { Button } from "../../../shared/ui/Button";
import { Card } from "../../../shared/ui/Card";
import { COLORS_BACKGROUND, COLORS_TEXT } from "../../../shared/ui/colors";
import { Typography } from "../../../shared/ui/Typography";
import { useGetTasks } from "../../tasks/tasks-utils";

interface Props {
  projectId: string;
}

export const ProjectTasksList: FC<Props> = function ProjectTasksList(props) {
  const navigate = useNavigate();

  const { data } = useGetTasks({
    projectId: props.projectId,
  });

  return (
    <div className={"mt-4 flex flex-col gap-4"}>
      <Button
        onClick={() =>
          navigate({
            to: "/tasks/add",
            search: {
              projectId: props.projectId,
            },
          })
        }
      >
        {"Добавить задачу"}
      </Button>
      {data?.map((item) => (
        <Card key={item.id} className={`${COLORS_BACKGROUND.primary} w-full`}>
          <Typography
            size={20}
            color={COLORS_TEXT.alternative}
          >{`Задача: ${item.title}`}</Typography>
          <Typography
            color={COLORS_TEXT.alternative}
          >{`Исполнитель: @${item.user?.username}`}</Typography>
        </Card>
      ))}
    </div>
  );
};
