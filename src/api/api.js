import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5001",
  responseType: "json",
});

export const BASEURL = "http://localhost:5001";

export default API;
