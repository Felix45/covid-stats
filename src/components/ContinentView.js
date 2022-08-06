import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { fetchStatsThunk } from '../redux/slices/covidSlice';
import { fetchCountriesThunk } from '../redux/slices/countriesSlice';
import { fetchTitleThunk } from '../redux/slices/navbarSlice';
import ContinentList from './ContinentList';
import continents from '../mock/data';
import { fetchVaccinatedThunk } from '../redux/slices/vaccineSlice';

const ContinentView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatsThunk());
    dispatch(fetchCountriesThunk());
    dispatch(fetchVaccinatedThunk());
    dispatch(fetchTitleThunk('World'));
  }, []);

  const [regions] = useState(continents);
  const { stats } = useSelector((state) => state.stats);
  const { vaccines } = useSelector((state) => state.vaccines);

  regions.forEach((region) => { region.cases = 0; region.vaccinated = 0; });

  regions.map((region) => {
    Object.keys(stats).forEach((stat) => {
      if (stats[stat].All.continent === region.name) {
        region.cases += stats[stat].All.confirmed;
        region.vaccinated += vaccines[stat] ? vaccines[stat].All.people_vaccinated : 0;
      }
    });
    return region;
  });

  return (
    <Container>
      <ContinentList stats={stats} regions={regions} vaccines={vaccines} />
    </Container>
  );
};

export default ContinentView;
