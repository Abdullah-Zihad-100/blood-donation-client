import axios from "axios";
const axiosSeceure = axios.create({
  baseURL: "http://localhost:5000",withCredentials:true,
});
export default axiosSeceure