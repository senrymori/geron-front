import { FC } from "react";
import { Button } from "../../../shared/ui/Button";
import { Card } from "../../../shared/ui/Card";
import { COLORS_BORDER } from "../../../shared/ui/colors";
import { Typography } from "../../../shared/ui/Typography";
import { Note } from "../model/Note";

interface Props extends Note {
  onEdit: () => void;
  onDelete: () => void;
}

export const NoteListItem: FC<Props> = function NoteListItem(props) {
  return (
    <li className="w-full">
      <Card className={`${COLORS_BORDER.secondary100} border-2`}>
        <Typography className="mb-2" size={20} weight={600}>
          {props.title}
        </Typography>
        <Typography className="mb-2" size={16}>
          {props.description}
        </Typography>

        <Button mode={"border"} className={"mb-2"} onClick={props.onEdit}>
          {"Редактировать"}
        </Button>

        <Button mode={"dark"} className={"bg-red-500"} onClick={props.onDelete}>
          {"Удалить"}
        </Button>
      </Card>
    </li>
  );
};
