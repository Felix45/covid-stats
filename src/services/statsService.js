import http from '../lib/http';

const fetchStats = () => http.get('/cases');

export default fetchStats;
