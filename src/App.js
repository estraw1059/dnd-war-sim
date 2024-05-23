import React from 'react';
import HitBar from './Hitbar';
import { Row, Col, Container } from 'react-bootstrap';

const EVIL_SQUAD_COUNT = Array.from({ length: 20 }, (_, index) => index + 1);
const GOOD_SQUAD_COUNT = Array.from({ length: 10 }, (_, index) => index + 1);

function App() {
  
  return (
    <Container>
      <Row>
        <Col>
          {EVIL_SQUAD_COUNT.map((item, index) => (
            <HitBar key={index} startingHealth={20} title={`Evil Squad ${index + 1}`} />
          ))}
        </Col>
        <Col>
          {GOOD_SQUAD_COUNT.map((item, index) => (
              <HitBar key={index} startingHealth={20} title={`Good Squad ${index + 1}`} />
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
