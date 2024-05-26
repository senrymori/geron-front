import { useQuery } from "@tanstack/react-query";
import { apiService } from "../../app/services/api/ApiService";
import { Profile } from "../../features/models/Profile";
import { Project } from "../projects/project-utils";

export type TaskStatus = "create";

export interface Task {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  user: Omit<Profile, "email">;
  project: Project;
  status: TaskStatus;
}

interface TaskFilters {
  username?: string;
  projectId?: string;
}

export function useGetMyTasks(filters?: TaskFilters) {
  return useQuery({
    queryKey: ["tasks", "my", filters],
    queryFn: async () => {
      const response = await apiService.get<Task[]>({
        url: "/tasks/my",
      });

      return response.data;
    },
  });
}

export function useGetTasks(filters?: TaskFilters) {
  return useQuery({
    queryKey: ["tasks", filters],
    queryFn: async () => {
      const response = await apiService.get<Task[]>({
        url: "/tasks",
      });

      return response.data;
    },
  });
}
