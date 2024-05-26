import { FC, useState } from "react";
import { TabMenu, TabMenuItem } from "../../shared/ui/TabMenu";
import { Typography } from "../../shared/ui/Typography";
import { Project } from "./project-utils";
import { MembersList } from "./ui/MembersList";
import { ProjectTasksList } from "./ui/ProjectTasksList";

const TABS: TabMenuItem[] = [
  {
    index: 0,
    title: "Участники",
  },
  {
    index: 1,
    title: "Задачи",
  },
];

export const ProjectOnePage: FC<Project> = function ProjectOnePage(props) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <section className={"flex flex-1 flex-col"}>
      <Typography size={24}>{props.name}</Typography>
      <TabMenu
        data={TABS}
        activeIndex={activeTabIndex}
        onChangeIndex={setActiveTabIndex}
      />

      {activeTabIndex === 0 ? (
        <MembersList projectId={props.id} />
      ) : (
        <ProjectTasksList projectId={props.id} />
      )}
    </section>
  );
};
