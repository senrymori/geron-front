import { MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useRouter, useSearch } from "@tanstack/react-router";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { apiService } from "../../app/services/api/ApiService";
import { useAuth } from "../../features/auth";
import { queryClient } from "../../ini/InitializeApp";
import { Button } from "../../shared/ui/Button";
import { useGetProjects } from "../projects/project-utils";

interface Form {
  title: string;
  startDate: Date;
  endDate: Date;
  projectId: string;
  username: string;
}

export const TaskFormPage: FC = function TaskFormPage() {
  const search = useSearch({ from: "/tasks/add" });
  const { user } = useAuth();

  const { history } = useRouter();

  const {
    control,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm<Form>({
    defaultValues: {
      title: "",
      startDate: new Date(),
      endDate: new Date(),
      projectId: search.projectId,
      username: user?.username,
    },
  });

  const { data: projects } = useGetProjects();
  const projectsSelect =
    projects?.map((item) => ({
      value: item.id,
      label: item.name,
    })) || [];

  return (
    <form
      className="gap-4 flex flex-1 flex-col"
      onSubmit={handleSubmit(async (form) => {
        await apiService.post({
          url: "/tasks",
          dto: form,
        });

        await queryClient.invalidateQueries({
          queryKey: ["tasks"],
        });

        history.back();
      })}
    >
      <Controller
        name={"title"}
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
      <Controller
        name={"startDate"}
        control={control}
        render={({ field: { value, onChange } }) => (
          <DatePicker value={value} onChange={onChange} label="Начало" />
        )}
      />
      <Controller
        name={"endDate"}
        control={control}
        render={({ field: { value, onChange } }) => (
          <DatePicker value={value} onChange={onChange} label="Конец" />
        )}
      />
      <Controller
        name={"projectId"}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={value}
            onChange={onChange}
          >
            {projectsSelect.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <Button disabled={!isValid || isSubmitting} type="submit">
        {"Добавить"}
      </Button>
    </form>
  );
};
