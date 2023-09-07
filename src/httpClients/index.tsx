import axios from 'axios';

const API_ROOT = 'http://localhost:3000';

const httpClient = axios.create({
    baseURL: API_ROOT
});

httpClient.interceptors.request.use(
    //config interceptors request here
);

httpClient.interceptors.response.use(
    //config interceptors response here
)

export default httpClient;
