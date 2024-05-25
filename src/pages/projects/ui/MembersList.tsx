import { FC } from "react";
import { Button } from "../../../shared/ui/Button";
import { Card } from "../../../shared/ui/Card";
import { COLORS_BACKGROUND } from "../../../shared/ui/colors";
import { Typography } from "../../../shared/ui/Typography";
import { useGetMembersProject } from "../project-utils";

interface Props {
  projectId: string;
}

export const MembersList: FC<Props> = function MembersList(props) {
  const { data } = useGetMembersProject(props.projectId);

  if (!data?.length) return null;

  return (
    <div className="flex flex-col gap-4 mt-4">
      <Button mode={"dark"}>{"Добавить участника"}</Button>
      <div className={`columns-auto gap-2`}>
        {data?.map((item) => (
          <Card
            key={item.user.username}
            className={`${COLORS_BACKGROUND.main400} mb-2`}
          >
            <Typography weight={600}>
              {`${item.user.firstName} ${item.user.lastName}`}
            </Typography>
            <Typography weight={600}>{`@${item.user.username}`}</Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};
