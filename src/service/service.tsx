import axios from "../axios.interceptor";
import { Project, Project_Status, Project_Tag } from "../types/type";

export const getAllProject = async (): Promise<Project[]> => {
  return axios.get("/Project");
};

export const getAllProjectStatus = async (): Promise<Project_Status[]> => {
  return axios.get("/Project_Status");
};

export const getProjecTag = async (): Promise<Project_Tag[]> => {
  return axios.get("/Project_Tag");
};

export const getProductById = async (id: any): Promise<Project> => {
  return axios.get(`/Project/${id}`);
};

export const postNewProject = async (project: any) => {
  return axios.post("/Project", project);
};

export const updateProject = async (project: any) => {
  return axios.put(`/Project/${project.id}`, project);
};

export const deleteProject = async (id: any) => {
  return axios.delete(`/Project/${id}`);
};
