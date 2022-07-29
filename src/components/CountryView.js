import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import CountryList from './CountryList';
import { fetchTitleThunk } from '../redux/slices/navbarSlice';
import { filterRanges } from '../mock/data';
import { filterCountries, fetchStatsThunk } from '../redux/slices/covidSlice';

const CountryView = () => {
  const dispatch = useDispatch();

  const { continent } = useParams();
  const { stats } = useSelector((state) => state.stats);
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchTitleThunk(continent));
  }, []);

  const handleReset = () => {
    dispatch(fetchStatsThunk());
  };

  const handleCountries = (filterRange) => {
    const { lower, higher } = JSON.parse(filterRange);

    const newState = {};
    Object.keys(stats).filter((stat) => {
      const confirmedCases = stats[stat].All.confirmed;
      const { country } = stats[stat].All;

      if (confirmedCases >= lower
        && confirmedCases <= higher
        && stats[stat].All.continent === continent) {
        newState[country] = stats[country];
      }
      return newState;
    });

    dispatch(filterCountries(newState));
  };

  return (
    <Container>
      <Row className="d-flex slider">
        <Col xs={6} className="m-0 p-0">
          <Card>
            <Card.Img className="p-3" src={`${process.env.PUBLIC_URL}/images/${continent.toLowerCase()}.png`} />
          </Card>
        </Col>
        <Col xs={6} className="m-0 p-0 pos">
          <Card className="pos-rel">
            <Card.Title>{ continent }</Card.Title>
          </Card>
        </Col>
        <Col xs={12} className="d-flex p-2 py-2 justify-content-between title-strip">
          <h5 className="m-0">Filter by cases</h5>
          <button type="button" onClick={handleReset}>
            Reset Filter
            {' '}
            <span className="fa fa-refresh pt-1" />
          </button>
        </Col>
        <Col className="p-2">
          <select onChange={(e) => handleCountries(e.target.value)} className="d-block p-1">
            <option value="{lower: 0, higher: 0}">
              Cases in
              {continent}
            </option>
            {
              filterRanges.map((range) => (
                <option key={uuidv4()} value={JSON.stringify(range)}>
                  {range.lower.toLocaleString('en-US')}
                  {' '}
                  -
                  {' '}
                  {range.higher.toLocaleString('en-US')}
                </option>
              ))
            }
          </select>
        </Col>
      </Row>
      <Row>
        <CountryList continent={continent} countries={stats} nations={countries} />
      </Row>
    </Container>
  );
};

export default CountryView;
