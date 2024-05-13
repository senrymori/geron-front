import { FC } from "react";
import { Card } from "../../../shared/ui/Card";
import { COLORS_BACKGROUND, COLORS_TEXT } from "../../../shared/ui/colors";
import { Typography } from "../../../shared/ui/Typography";
import { useGetMyTasks } from "../../tasks/tasks-utils";

export const TasksContent: FC = function TasksContent() {
  const { data } = useGetMyTasks();

  return (
    <div className={"columns-2 mt-4 "}>
      {data?.map((item) => (
        <Card key={item.id} className={`${COLORS_BACKGROUND.secondary400}`}>
          <Typography color={COLORS_TEXT.alternative}>{item.title}</Typography>
        </Card>
      ))}
    </div>
  );
};
