import axios from "axios";

export const getAllProject = async () => {
  const response = await axios.get("http://localhost:9999/Project");
  return response.data;
};
export const getAllProjectStatus = async () => {
  const response = await axios.get("http://localhost:9999/Project_Status");
  return response.data;
};

export const getProductById = async (id: any) => {
  const response = await axios.get(`http://localhost:9999/Project/${id}`);
  return response.data;
};

export const postNewProject = async (project: any) => {
  const response = await axios.post("http://localhost:9999/Project", project);
  return response.data;
};
