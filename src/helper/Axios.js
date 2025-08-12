import axios from "axios";

export const Axios = axios.create({
    baseURL: import.meta.env.VITE_APP_API || "http://192.168.0.123:5000/user-api",
});

console.log("Base URL:", import.meta.env.VITE_APP_API);
console.log("env test →", import.meta.env);
console.log("env API →", import.meta.env.VITE_APP_API);
    