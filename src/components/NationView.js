import React from "react";
import { useSelector } from 'react-redux';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

const NationView = () => {
  const { nation } = useParams();
  const { stats } = useSelector((state) => state.stats);
  const { countries } = useSelector((state) => state.countries);

  const { confirmed, deaths, population, life_expectancy, continent } = stats[nation].All;

  let countryFlag;
  let coords;

  countries.forEach((item) => {
    if (item.name.common === nation) {
      countryFlag = item.flag;
    }
  });
  
  return (
    <Container>
      <Row>
       <Col xs={12}>
         <Card>
           <div id="map">

           </div>
          <Card.Title className="px-3 py-2">{ countryFlag } { nation }</Card.Title>
          <Card.Body>
            <Table striped bordered>
              <tbody>
              <tr>
                  <td>Cases</td>
                  <td>{ confirmed.toLocaleString('en-US') }</td>
                </tr>
                <tr>
                  <td>Fatalities</td>
                  <td>{ deaths.toLocaleString('en-US') }</td>
                </tr>
                <tr>
                  <td>Continent</td>
                  <td>{ continent }</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
       </Col>
      </Row>
      <Row>
        <Col xs={12} className="my-3">
          <h3>More about { nation }</h3>
          <Table table striped>
              <tbody>
                <tr>
                  <td>Population</td>
                  <td>{ population.toLocaleString('en-US') }</td>
                </tr>
                <tr>
                  <td>Affected Population</td>
                  <td>{ Math.round(((confirmed + deaths) / population) * 100) + 1 } %</td>
                </tr>
                <tr>
                  <td>Life Expectancy</td>
                  <td>{ life_expectancy } Yrs</td>
                </tr>
              </tbody>
            </Table>
        </Col>
      </Row>
    </Container>
    
  )
};

export default NationView;