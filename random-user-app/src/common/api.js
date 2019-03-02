
import axios from 'axios';
import { BASE_URL_API, RESULTS } from './config';

export function fetchRandomUserApi(page) {
  return axios.get(BASE_URL_API, {
    params: {
      results: RESULTS,
      page: page
    }
  })
  .then( res => ( { res }))
  .catch( error => ( { error }));
}
