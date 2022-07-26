import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Continent from './Continent';

const ContinentList = (props) => {
  const { regions } = props;
  const total = regions.reduce((prev, curr) => prev += curr.cases, 0);

  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Img src={`${process.env.PUBLIC_URL}/images/world.png`} />
          <Card.Title className="px-3">COVID WORLD STATS</Card.Title>
          <Card.Text className="p-3 py-0">
            <strong>{total.toLocaleString('en-US')}</strong>
          </Card.Text>
        </Card>
      </Col>
      {
      regions.map((region) => (
        <Continent key={region.id} region={region} />
      ))
     }
    </Row>
  );
};

ContinentList.propTypes = {
  regions: PropTypes.instanceOf(Array).isRequired,
};

export default ContinentList;
