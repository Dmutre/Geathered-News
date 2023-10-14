import axios from 'axios';
import config from '../config.json';

/* API SPECIALITY
Function get as parameters callback to set response of server to needed variable and params for GET method
The required params are apiKey and country, and with the last one: if we don`t let it in parans, 
it will use default*/
export const getHeadlineArticles = (params) => {
  const newsCounty = !params.country ? config.default_country : params.country;

  return axios.get(config.HEADLINE_URL, {
    params: {
      country: newsCounty,
      apiKey: config.API_KEY,
      ...params
    }
  });
};