import { TextField } from "@mui/material";
import { useRouter } from "@tanstack/react-router";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { apiService } from "../../app/services/api/ApiService";
import { queryClient } from "../../ini/InitializeApp";
import { Button } from "../../shared/ui/Button";
import { getProjectsQueryKeys, Project } from "./project-utils";

interface Props {
  project?: Project;
}

interface Form {
  name: string;
}

export const ProjectFormPage: FC<Props> = function ProjectFormPage(props) {
  const { history } = useRouter();

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm<Form>({
    defaultValues: {
      name: props.project?.name || "",
    },
  });

  return (
    <form
      className="gap-4 flex flex-1 flex-col"
      onSubmit={handleSubmit(async (form) => {
        if (props.project) {
          await apiService.patch({
            url: `/projects/${props.project.id}`,
            dto: form,
          });
        } else {
          await apiService.post({ url: "/projects", dto: form });
        }

        await queryClient.invalidateQueries({
          queryKey: getProjectsQueryKeys(),
        });

        history.back();
      })}
    >
      <Controller
        name={"name"}
        control={control}
        rules={{
          required: "Это поле обязательное",
        }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={Boolean(error?.message)}
            helperText={error?.message}
            label={"Название проекта"}
            fullWidth={true}
            variant={"outlined"}
          />
        )}
      />

      <Button disabled={!isValid || isSubmitting} type="submit">
        {props.project ? "Сохранить" : "Добавить"}
      </Button>
    </form>
  );
};
