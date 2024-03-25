import axios from "axios";
import config from "config";

const mAxios = axios.create({
  baseURL: "",
  withCredentials: false,
  crossDomain: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default mAxios;
