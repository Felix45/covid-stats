import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

const Continent = (props) => {
  const { region } = props;
  return (
    <Col xs={6} className="my-3">
      <Card>
        <Card.Body>
          <Card.Text className="text-right">
            <div>
              <h2>{region.name}</h2>
            </div>
            <div>{region.cases}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

Continent.propTypes = {
  region: PropTypes.instanceOf(Object).isRequired,
};
export default Continent;
