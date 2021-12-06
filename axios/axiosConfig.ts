import axios from 'axios';

const axiosClient = axios;

axiosClient.defaults.baseURL = 'http://192.168.100.49:8000';
axiosClient.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axiosClient.defaults.headers.post.Accept = 'application/json';

export default axiosClient;
// sudo systemctl start mongod
