import { FC } from "react";
import { Card } from "../../shared/ui/Card";
import { COLORS_BACKGROUND, COLORS_BORDER } from "../../shared/ui/colors";
import { Typography } from "../../shared/ui/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Profile } from "../../features/models/Profile";
import { apiService } from "../../app/services/api/ApiService";
import { useRouter } from "@tanstack/react-router";
import { queryClient } from "../../ini/InitializeApp";
import { getProjectsQueryKeys } from "./project-utils";

interface Props {
  data: Omit<Profile, "email">[];
  projectId: string;
}

export const ProjectParticipants: FC<Props> = function ProjectParticipants(
  props
) {
  const { history } = useRouter();

  return (
    <section className={"flex flex-1 flex-col"}>
      <div className={"columns-auto gap-2"}>
        {props.data?.map((item) => (
          <Card
            key={item.username}
            className={`${COLORS_BACKGROUND.alternative} mb-2 border ${COLORS_BORDER.primary}`}
          >
            <div className="flex">
              <div className="flex-1">
                <Typography>{`${item.firstName} ${item.lastName}`}</Typography>
                <Typography weight={600}>{`@${item.username}`}</Typography>
              </div>
              <AddBoxIcon
                fontSize={"large"}
                className={"cursor-pointer"}
                onClick={async () => {
                  await apiService.post({
                    url: `/projects/${props.projectId}/members`,
                    dto: {
                      username: item.username,
                    },
                  });

                  await queryClient.invalidateQueries({
                    queryKey: [
                      ...getProjectsQueryKeys(props.projectId),
                      "members",
                    ],
                  });

                  history.back();
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
