import React from 'react';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import CountryList from './CountryList';

const CountryView = () => {
  const { continent } = useParams();
  const { stats } = useSelector((state) => state.stats);
  const { countries } = useSelector((state) => state.countries);

  return (
    <Container>
      <Row className="d-flex slider">
        <Col xs={6} className="m-0 p-0">
          <Card>
            <Card.Img className="p-3" src={`${process.env.PUBLIC_URL}/images/${continent.toLowerCase()}.png`} />
          </Card>
        </Col>
        <Col xs={6} className="m-0 p-0 pos">
          <Card className="pos-rel">
            <Card.Title>{ continent }</Card.Title>
          </Card>
        </Col>
        <Col xs={12} className="p-2 py-2 title-strip">
          <h5 className="m-0">Filter by cases</h5>
        </Col>
      </Row>
      <Row>
        <CountryList continent={continent} countries={stats} nations={countries} />
      </Row>
    </Container>
  );
};

export default CountryView;
