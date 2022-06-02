import axios from "axios";
export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDY0MjAsImlhdCI6MTYzMTAyMjAzOSwiZXhwIjoxNjYyNTU4MDM5fQ.1dVbPbqUgH_LsHrLJQYcVFtbipPhVmSvZyXOO-FcStA'


const baseUrl = 'https://dev-api.gpslive.app';

const axiosClient = axios.create({
    baseURL: baseUrl,
});

axiosClient.interceptors.request.use(
    async configs => {
        configs.headers.authorization = `Bearer ${token}`;
        return configs;
    },
    error => {
        console.log('request Error:', error);
    },
);

axiosClient.interceptors.response.use(
    configs => {
        if (configs.status !== 200 && configs.status !== 201) {
            console.log('Server Api:', configs.status);
        }
        return configs;
    },
    error => {
        if (error.status !== 200 && error.status !== 201) {

            console.log('Server Api:', error);
        }
        return error;
    },
);

export default axiosClient;