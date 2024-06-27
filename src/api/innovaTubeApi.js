import axios from 'axios';

const innovaTubeApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_BACKEND,

});

innovaTubeApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;

});

export default innovaTubeApi;



