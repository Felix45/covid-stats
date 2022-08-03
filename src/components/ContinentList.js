import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Continent from './Continent';

const ContinentList = (props) => {
  const { regions } = props;
  const lastUpdated = useRef(new Date());
  const total = regions.reduce((prev, curr) => prev += curr.cases, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      lastUpdated.current = new Date();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Row>
      <Col xs={12} className="p-0 pt-3 slider">
        <Card>
          <Card.Img src={`${process.env.PUBLIC_URL}/images/world.svg`} />
          <Card.Body className="px-0 pb-0">
            <Card.Title data-testid="title" className="px-3 pb-0 fw-bold title-home">COVID-19 CASES WORLD WIDE</Card.Title>
            <Card.Text className="p-3 mb-0 fw-bold">
              {`Cases: ${total.toLocaleString('en-US')}`}
              <br />
              {`Updated: ${lastUpdated.current.toDateString()} ${lastUpdated.current.toLocaleTimeString('en-US')}`}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} className="p-3 py-2 title-strip">
        <h5 className="fw-bold m-0 py-2">Total cases per continent</h5>
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
