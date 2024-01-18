import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

const portfolioApi = axios.create({
  baseURL: VITE_API_URL,
});
portfolioApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  return config;
});

export default portfolioApi;
