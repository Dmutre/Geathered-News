import axios from 'axios';
import config from '../config.json';

//function get as parameters callback to set response of server to needed variable and params for GET method
export const getHeadlineArticles = async (setPosts, params) => {
  await axios.get(config.HEADLINE_URL, {
    params: {
      country: config.default_country,
      apiKey: config.API_KEY,
      ...params
    }
  }).then(response => {
    console.log(response);
    setPosts(response.data.articles);
  });
}