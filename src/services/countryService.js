import { httpOne } from '../lib/http';

const fetchCountries = () => httpOne.get();

export default fetchCountries;
