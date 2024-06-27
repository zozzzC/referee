import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "http://replace.com";

const axiosApp = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosApp;
