
import axios from "axios";

// define the base url for the api


const baseURL = "http://localhost:3005/api";

// define the instance
const authInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "content-type": "application/json",
  },
});

// define the protected instance
const protectedInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "content-type": "application/json",
  },
});

// define the interceptor for the protected instance
protectedInstance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'bearer ' + token;
        }
        return config;
    }
);

// export the instance  
export default {
    authInstance,
    protectedInstance
};
