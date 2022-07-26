import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Continent = (props) => {
  const { region } = props;
  return (
    <Col xs={6} className="my-3">
      <Card>
        <Card.Img src={`${process.env.PUBLIC_URL}/images/${region.image}`} />
        <Card.Body>
          <Card.Text className="pull-right">
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
