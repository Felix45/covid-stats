import { v4 as uuidv4 } from 'uuid';

const continents = [
  {
    id: uuidv4(),
    name: 'Africa',
    map: '',
    cases: 0,
    vaccinated: 0,
    image: 'africa.svg',
  },
  {
    id: uuidv4(),
    name: 'Asia',
    map: '',
    cases: 0,
    vaccinated: 0,
    image: 'asia.svg',
  },
  {
    id: uuidv4(),
    name: 'Europe',
    map: '',
    cases: 0,
    vaccinated: 0,
    image: 'europe.svg',
  },
  {
    id: uuidv4(),
    name: 'Oceania',
    map: '',
    cases: 0,
    vaccinated: 0,
    image: 'oceania.svg',
  },
  {
    id: uuidv4(),
    name: 'North America',
    map: '',
    cases: 0,
    vaccinated: 0,
    image: 'north america.svg',
  },
  {
    id: uuidv4(),
    name: 'South America',
    map: '',
    cases: 0,
    vaccinated: 0,
    image: 'south america.svg',
  },
  {
    id: uuidv4(),
    name: 'Antarctica',
    map: '',
    cases: 0,
    vaccinated: 0,
    image: 'antarctica.svg',
  },
];

export const filterRanges = [
  { lower: 0, higher: 100000 },
  { lower: 100001, higher: 300000 },
  { lower: 300001, higher: 500000 },
  { lower: 500001, higher: 1000000 },
  { lower: 1000001, higher: 2000000 },
  { lower: 2000001, higher: 4000000 },
  { lower: 4000001, higher: 5000000 },
  { lower: 5000001, higher: 100000000 },
];

export default continents;
