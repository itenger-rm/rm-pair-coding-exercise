import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8008',
  headers: { Accept: 'application/json;charset=UTF-8' }
});

export default axiosClient