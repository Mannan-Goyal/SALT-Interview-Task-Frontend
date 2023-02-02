import axios from "axios";


export const API = axios.create({
    baseURL: "http://localhost:3001",
    responseType: "json",
})

export const BASEURL = "http://localhost:3001"

export default API