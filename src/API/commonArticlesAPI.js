import axios from 'axios';
import config from '../config.json';

//function get as parameters callback to set response of server to needed variable and params for GET method
export const getHeadlineArticles = (params) => {
  return axios.get(config.PLANE_URL, {
    params: {
      q: "",
      apiKey: config.API_KEY,
      ...params
    }
  });
};