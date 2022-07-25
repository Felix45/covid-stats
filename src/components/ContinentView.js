import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStatsThunk } from '../redux/slices/covidSlice';

const ContinentView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatsThunk());
  }, []);

  const { stats } = useSelector((state) => state.stats);

  return (
    <div stats={stats}>
      <h1>COVID-19 Tracker</h1>
    </div>
  );
};

export default ContinentView;
