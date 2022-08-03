import http from '../lib/http';

const fetchVaccinated = () => http.get('/vaccines');

export default fetchVaccinated;
