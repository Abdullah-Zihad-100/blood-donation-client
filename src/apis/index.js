import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://compact-blood-donation-server.vercel.app",
  withCredentials: true, // Ensures cookies are sent with requests
});

// Create a function to set up the interceptor
export const setupAxiosInterceptors = (logout) => {
  axiosSecure.interceptors.response.use(
    (response) => {
      // If the response is successful, simply return the response
      return response;
    },
    (error) => {
      // Check if the error response status indicates an authentication issue (e.g., 401 Unauthorized)
      if (error.response && error.response.status === 401) {
        // Call the logout function from your auth context
        logout();
      }
      // Reject the promise with the error object
      return Promise.reject(error);
    }
  );
};

export default axiosSecure;



// https://compact-blood-donation-server.vercel.app
// http://localhost:5000