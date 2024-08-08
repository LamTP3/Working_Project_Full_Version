import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.ENDPOINT_URL ?? "http://localhost:9999/",
});
instance.interceptors.response.use((response) => {
  const { data } = response;
  return data;
});

export default instance;
