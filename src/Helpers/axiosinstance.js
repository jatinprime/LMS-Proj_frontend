import axios from 'axios'

const BASE_URL="http://localhost:5010/api/v1";

const axiosInstance= axios.create();

axiosInstance.defaults.baseUrl=BASE_URL;

axiosInstance.defaults.withCredentials=true;

export default axiosInstance;