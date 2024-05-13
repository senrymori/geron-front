import { FC } from "react";
import { Task } from "./tasks-utils";

interface Props {
  task?: Task;
}

interface Form {
  title: string;
  startDate: string;
  endDate: string;
}

export const ProjectFormPage: FC<Props> = function ProjectFormPage(props) {
  return <></>;
};
