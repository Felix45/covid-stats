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
      <Row>
        <Col xs={6}>
          <Card>
            <Card.Img src={`${process.env.PUBLIC_URL}/images/${continent.toLowerCase()}.png`} />
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <Card.Title>{ continent }</Card.Title>
          </Card>
        </Col>
      </Row>
      <Row>
        <CountryList continent={continent} countries={stats} nations={countries} />
      </Row>
    </Container>
  );
};

export default CountryView;
