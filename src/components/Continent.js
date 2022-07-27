import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Continent = (props) => {
  const { region } = props;
  return (
    <Col xs={6} className="my-3">
      <Card>
        <NavLink to={`/continent/${region.name}`}>
          <Card.Img src={`${process.env.PUBLIC_URL}/images/${region.image}`} />
        </NavLink>
        <Card.Body>
          <div>
            <h2>{region.name}</h2>
          </div>
          <div>
            <strong>
              Cases
              <br />
              { region.cases.toLocaleString('en-US') }
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
