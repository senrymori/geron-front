import { useQuery } from "@tanstack/react-query";
import { apiService } from "../../app/services/api/ApiService";
import { Profile } from "../../features/models/Profile";

export interface Project {
  id: string;
  name: string;
}

export function getProjectsQueryKeys(id?: string) {
  return ["projects", id];
}

export function useGetProjects() {
  return useQuery({
    queryKey: getProjectsQueryKeys(),
    queryFn: async () => {
      const response = await apiService.get<Project[]>({
        url: "/projects",
      });

      return response.data;
    },
  });
}

export function useGetProjectOne(id: string) {
  return useQuery({
    queryKey: getProjectsQueryKeys(id),
    queryFn: async () => {
      const response = await apiService.get<Project[]>({
        url: "/projects",
      });

      const project = response.data.find((item) => item.id === id);

      return project;
    },
  });
}

interface Member {
  role: "ADMIN" | "WORKER";
  user: Omit<Profile, "email">;
}

export function useGetParticipantsProject(projectId: string) {
  return useQuery({
    queryKey: [...getProjectsQueryKeys(projectId), "participants"],
    queryFn: async () => {
      const response = await apiService.get<Omit<Profile, "email">[]>({
        url: `/projects/${projectId}/participants`,
      });

      return response.data;
    },
  });
}

export function useGetMembersProject(projectId: string) {
  return useQuery({
    queryKey: [...getProjectsQueryKeys(projectId), "members"],
    queryFn: async () => {
      const response = await apiService.get<Member[]>({
        url: `/projects/${projectId}/members`,
      });

      return response.data;
    },
  });
}
