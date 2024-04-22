import { TextField } from "@mui/material";
import { redirect, useNavigate } from "@tanstack/react-router";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { apiService } from "../../app/services/ApiService";
import {
  requiredEmailValidationRule,
  requiredValidateMaxLength,
} from "../../components/input-validate";
import { Button } from "../../shared/ui/Button";
import { AuthForm } from "./ui/AuthForm";

interface FormType {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register: FC = function Register() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormType>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <AuthForm
      onSubmit={handleSubmit(async (form) => {
        const response = await apiService.post<string>({
          url: "/auth/register",
          dto: form,
        });

        if (response.data) {
          navigate({ to: "/login" });
        }
      })}
    >
      <Controller
        name={"username"}
        control={control}
        rules={requiredValidateMaxLength(6)}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={Boolean(error?.message)}
            helperText={error?.message}
            label={"Логин"}
            fullWidth={true}
            variant={"standard"}
          />
        )}
      />
      <Controller
        name={"firstName"}
        control={control}
        rules={requiredValidateMaxLength(2)}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={Boolean(error?.message)}
            helperText={error?.message}
            label={"Имя"}
            fullWidth={true}
            variant={"standard"}
          />
        )}
      />
      <Controller
        name={"lastName"}
        control={control}
        rules={requiredValidateMaxLength(2)}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={Boolean(error?.message)}
            helperText={error?.message}
            label={"Фамилия"}
            fullWidth={true}
            variant={"standard"}
          />
        )}
      />
      <Controller
        name={"email"}
        control={control}
        rules={requiredEmailValidationRule}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={Boolean(error?.message)}
            helperText={error?.message}
            label={"E-mail"}
            fullWidth={true}
            variant={"standard"}
          />
        )}
      />
      <Controller
        name={"password"}
        control={control}
        rules={requiredValidateMaxLength(6)}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            type={"password"}
            error={Boolean(error?.message)}
            helperText={error?.message}
            label={"Пароль"}
            fullWidth={true}
            variant={"standard"}
          />
        )}
      />
      <Button disabled={!isValid} type="submit">
        {"Зарегистрироваться"}
      </Button>
    </AuthForm>
  );
};
