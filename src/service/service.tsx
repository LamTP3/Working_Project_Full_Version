import axios from "../axios.interceptor";
import { Project, Project_Status } from "../type/type";
export const getAllProject = async (): Promise<Project[]> => {
  return axios.get("/Project");
};
export const getAllProjectStatus = async (): Promise<Project_Status[]> => {
  return axios.get("/Project_Status");
};

export const getProductById = async (id: any): Promise<Project> => {
  return axios.get(`/Project/${id}`);
};

export const postNewProject = async (project: any) => {
  return axios.post("/Project", project);
};
