import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Continent = (props) => {
  const { region } = props;
  return (
    <Col xs={6} md={4} className={`m-0 p-0 continent ${region.name.toLowerCase()}`}>
      <Card>
        <NavLink to={`/continent/${region.name}`}>
          <Card.Header className="p-2 text-end">
            <span className="fa fa-arrow-circle-right fa-lg" />
          </Card.Header>
          <Card.Img className="pt-2" src={`${process.env.PUBLIC_URL}/images/${region.image}`} />
        </NavLink>
        <Card.Body className="text-end mb-2">
          <div className="mx-3">
            <h2 className="fw-bold">{region.name}</h2>
          </div>
          <div className="fw-bold mx-3">
            <strong>
              { `Cases ${region.cases.toLocaleString('en-US')}` }
              <br />
              { `Vaccinated ${region.vaccinated.toLocaleString('en-US')}` }
            </strong>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

Continent.propTypes = {
  region: PropTypes.instanceOf(Object).isRequired,
};

export default Continent;
