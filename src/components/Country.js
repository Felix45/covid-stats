import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';

const Country = (props) => {
  const { nation, nations, vaccines } = props;
  const { country, confirmed } = nation;

  let countryFlag;

  nations.forEach((item) => {
    if (item.name.common === country) {
      countryFlag = item.flag;
    }
  });

  return (
    <Col xs={6} md={3} className="mx-0 p-0 country">
      <Card className="p-2">
        <NavLink to={`/country/${country}`} className="d-flex justify-content-between text-decoration-none">
          <Card.Title>
            {country}
          </Card.Title>
          {countryFlag}
          <Card.Header className="p-0 px-2">
            <span className="fa fa-arrow-circle-right fa-lg" />
          </Card.Header>
        </NavLink>
        <Card.Body className="p-0 py-2">
          <NavLink to={`/country/${country}`} className="d-block px-0 justify-content-between text-decoration-none">
            <ListGroup>
              <ListGroup.Item className="px-2">
                <strong>
                  Cases:
                  {confirmed.toLocaleString('en-US')}
                </strong>
              </ListGroup.Item>
              <ListGroup.Item className="px-2">
                <strong>
                  Vaccinated:
                  <br />
                  {vaccines[country] ? vaccines[country].All.people_vaccinated.toLocaleString('en-US') : 0}
                </strong>
              </ListGroup.Item>
            </ListGroup>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

Country.propTypes = {
  nation: PropTypes.instanceOf(Object).isRequired,
  nations: PropTypes.instanceOf(Array).isRequired,
  vaccines: PropTypes.instanceOf(Object).isRequired,
};

export default Country;
