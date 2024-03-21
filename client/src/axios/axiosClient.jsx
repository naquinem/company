import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});
axiosClient.interceptors.request.use(
    (conf) => {
        const token = sessionStorage.getItem('token');
        if(token) {
            conf.headers.Authorization = `Bearer ${token}`;
        }
        return conf
    },
    (error) => {
        return Promise.reject(error);
    }
)
export default axiosClient;
