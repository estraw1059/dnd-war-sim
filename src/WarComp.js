
import React, {useState} from 'react';
import HitBar from './Hitbar';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './style.css';

const WarComp = () => {
    const [goodSquadCount, setGoodSquadCount] = useState(Array.from({ length: 7 }, (_, index) => index + 1));
    const [badSquadCount, setBadSquadCount] = useState(Array.from({ length: 20 }, (_, index) => index + 1));
    const addGoodSquadMembers = () => {
      setGoodSquadCount(prevCount => {
        const currentLength = prevCount.length;
        const newMembers = Array.from({ length: 1 }, (_, index) => currentLength + index + 1);
        return [...prevCount, ...newMembers];
      });
    };
  
    const addBadSquadMembers = () => {
      setBadSquadCount(prevCount => {
        const currentLength = prevCount.length;
        const newMembers = Array.from({ length: 1 }, (_, index) => currentLength + index + 1);
        return [...prevCount, ...newMembers];
      });
    };
    return (
        <Container fluid>
        <Row>
          <Col>
            <Row>
              {badSquadCount.map((index) => (
                <HitBar key={index} startingHealth={20} title={`Evil Squad ${index}`} />
              ))}
              <Button onClick={addBadSquadMembers} className="mt-3">Add Good Squad Members</Button>
            </Row>
          </Col>
          <Col>
            <Row>
              {goodSquadCount.map((index) => (
                  <HitBar key={index} startingHealth={20} title={`Good Squad ${index}`} />
                ))}
                <Button onClick={addGoodSquadMembers} className="mt-3">Add Good Squad Members</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
};

export default WarComp;