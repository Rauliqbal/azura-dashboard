import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";
export const api = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
