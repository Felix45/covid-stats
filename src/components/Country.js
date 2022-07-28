import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';

const Country = (props) => {
  const { nation, nations } = props;
  const { country, confirmed, deaths } = nation;

  let countryFlag;

  nations.forEach((item) => {
    if (item.name.common === country) {
      countryFlag = item.flag;
    }
  });

  return (
    <Col xs={6} className="my-2">
      <Card className="p-2">
        <NavLink to={`/country/${country}`} className="d-flex justify-content-between">
          <Card.Title>
            {country}
          </Card.Title>
          {countryFlag}
        </NavLink>
        <Card.Body className="p-0">
          <ListGroup>
            <ListGroup.Item>
              cases:
              {confirmed.toLocaleString('en-US')}
            </ListGroup.Item>
            <ListGroup.Item>
              fatalities:
              {deaths.toLocaleString('en-US')}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

Country.propTypes = {
  nation: PropTypes.instanceOf(Object).isRequired,
  nations: PropTypes.instanceOf(Array).isRequired,
};

export default Country;
