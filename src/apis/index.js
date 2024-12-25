import axios from "axios";


const axiosSeceure = axios.create({
  baseURL: "https://compact-blood-donation-server.vercel.app",
  withCredentials: true,
});



export default axiosSeceure;

// https://compact-blood-donation-server.vercel.app

// http://localhost:5173 