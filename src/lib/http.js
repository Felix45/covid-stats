import axios from 'axios';

const STATS_BASE_URL = 'https://covid-api.mmediagroup.fr/v1';

const http = axios.create({ baseURL: STATS_BASE_URL });

export default http;
