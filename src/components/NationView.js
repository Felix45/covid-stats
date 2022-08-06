import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { fetchTitleThunk } from '../redux/slices/navbarSlice';

const NationView = () => {
  const dispatch = useDispatch();

  const { nation } = useParams();
  const { stats } = useSelector((state) => state.stats);
  const { vaccines } = useSelector((state) => state.vaccines);
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchTitleThunk(nation));
  }, []);

  const {
    confirmed, deaths, population, life_expectancy: lifeExpectancy, continent,
    capital, abbreviation,
  } = stats[nation].All;

  let countryFlag;
  let coords = {};

  countries.forEach((item) => {
    if (item.name.common === nation
      || item.cca2 === nation
      || item.cca2 === abbreviation
      || item.altSpellings.includes(nation)) {
      countryFlag = item.flag;
      coords = { lat: item.latlng[0], lng: item.latlng[1] };
    }
  });

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Title className="px-3 py-2 p-b-1 m-0">
              { countryFlag }
              {' '}
              { `${nation} stats` }
            </Card.Title>
            <Card.Body>
              <div className="map-wrapper">
                <MapContainer center={coords} zoom={6} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={coords}>
                    <Popup>
                      {nation.toUpperCase()}
                      {' '}
                      <br />
                      {' '}
                      {capital}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="m-0 my-3 p-0">
          <Table table striped>
            <tbody>
              <tr>
                <td colSpan={2}>{`More about ${nation} ${countryFlag}`}</td>
              </tr>
              <tr>
                <td>Population</td>
                <td className="text-end">{ population && population.toLocaleString('en-US') }</td>
              </tr>
              <tr>
                <td>Cases</td>
                <td className="text-end">{ confirmed && confirmed.toLocaleString('en-US') }</td>
              </tr>
              <tr>
                <td>Administered vaccine doses</td>
                <td className="text-end">{ vaccines[nation] && vaccines[nation].All.administered.toLocaleString('en-US') }</td>
              </tr>
              <tr>
                <td>Vaccinated</td>
                <td className="text-end">{ vaccines[nation] && vaccines[nation].All.people_vaccinated.toLocaleString('en-US') }</td>
              </tr>
              <tr>
                <td>Partially Vaccinated</td>
                <td className="text-end">{ vaccines[nation] && vaccines[nation].All.people_partially_vaccinated.toLocaleString('en-US') }</td>
              </tr>
              <tr>
                <td>Fatalities</td>
                <td className="text-end">{ deaths && deaths.toLocaleString('en-US') }</td>
              </tr>
              <tr>
                <td>Continent</td>
                <td className="text-end">{ continent }</td>
              </tr>
              <tr>
                <td>Affected Population</td>
                <td className="text-end">
                  { Math.round(((confirmed + deaths) / population) * 100) + 1 }
                  {' '}
                  %
                </td>
              </tr>
              <tr>
                <td>Life Expectancy</td>
                <td className="text-end">
                  { lifeExpectancy }
                  {' '}
                  Yrs
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

  );
};

export default NationView;
