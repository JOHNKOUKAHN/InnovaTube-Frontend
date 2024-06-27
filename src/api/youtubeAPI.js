import axios from 'axios';

const youtubeApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_YOUTUBE_API,

});

youtubeApi.interceptors.request.use(config => {

  config.headers = {
    ...config.headers,
  }

  config.params = {
    ...config.params,
    'key': import.meta.env.VITE_YOUTUBE_API_KEY,

  }

  return config;

});

export default youtubeApi;



