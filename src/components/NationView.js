import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

const NationView = () => {
  const { nation } = useParams();
  const { stats } = useSelector((state) => state.stats);
  const { countries } = useSelector((state) => state.countries);

  const {
    confirmed, deaths, population, life_expectancy: lifeExpectancy, continent,
    capital,
  } = stats[nation].All;

  let countryFlag;
  let coords = {};

  countries.forEach((item) => {
    if (item.name.common === nation) {
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
              { nation }
            </Card.Title>
            <Card.Body>
              <div className="map-wrapper">
                <MapContainer center={coords} zoom={6}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={coords}>
                    <Popup>
                      {nation}
                      {' '}
                      <br />
                      {' '}
                      {capital}
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <Table striped bordered>
                <tbody>
                  <tr>
                    <td>Cases</td>
                    <td>{ confirmed && confirmed.toLocaleString('en-US') }</td>
                  </tr>
                  <tr>
                    <td>Fatalities</td>
                    <td>{ deaths && deaths.toLocaleString('en-US') }</td>
                  </tr>
                  <tr>
                    <td>Continent</td>
                    <td>{ continent }</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="my-3">
          <h3>{`More about ${nation} ${countryFlag}`}</h3>
          <Table table striped>
            <tbody>
              <tr>
                <td>Population</td>
                <td>{ population && population.toLocaleString('en-US') }</td>
              </tr>
              <tr>
                <td>Affected Population</td>
                <td>
                  { Math.round(((confirmed + deaths) / population) * 100) + 1 }
                  {' '}
                  %
                </td>
              </tr>
              <tr>
                <td>Life Expectancy</td>
                <td>
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
