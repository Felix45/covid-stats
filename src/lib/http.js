import axios from 'axios';

const STATS_BASE_URL = 'https://covid-api.mmediagroup.fr/v1';
const FLAGS_BASE_URL = 'https://restcountries.com/v3/all';

const http = axios.create({ baseURL: STATS_BASE_URL });
export const httpOne = axios.create({ baseURL: FLAGS_BASE_URL });

export default http;
