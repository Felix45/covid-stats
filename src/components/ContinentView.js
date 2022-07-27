import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { fetchStatsThunk } from '../redux/slices/covidSlice';
import ContinentList from './ContinentList';
import continents from '../mock/data';

const ContinentView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatsThunk());
  }, []);

  const [regions] = useState(continents);
  const { stats } = useSelector((state) => state.stats);

  regions.map((region) => (region.cases = 0));

  regions.map((region) => {
    Object.keys(stats).forEach((stat) => {
      if (stats[stat].All.continent === region.name) region.cases += stats[stat].All.confirmed;
    });
    return region;
  });

  return (
    <Container>
      <ContinentList stats={stats} regions={regions} />
    </Container>
  );
};

export default ContinentView;
