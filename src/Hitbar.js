import React, { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import './style.css';

const HitBar = ({title, startingHealth}) => {
  const [health, setHealth] = useState(startingHealth);
  const [rollValue, setRollValue] = useState([1, 1]);

  const handleIncrease = () => {
    setHealth(health + 1);
  };

  const handleDecrease = () => {
    setHealth(health - 1);
  };

  const onAttack = () => {
    const roll1 = new DiceRoll('1d20');
    const roll2 = new DiceRoll('1d20');
    setRollValue([roll1.total, roll2.total]);
  }

  const cardClass = health === 0 ? 'bg-danger' : '';

  return (
    <Card className={`p-3 d-inline-block m-3 ${cardClass} hitbar-card`}>
      <Card.Title>{title}</Card.Title>
      <Card.Body className="d-flex align-items-center">
        <div>
          <ButtonGroup>
            <Button variant="primary" onClick={handleDecrease}>-</Button>
            <Button variant="secondary" disabled>{health}</Button>
            <Button variant="primary" onClick={handleIncrease}>+</Button>
          </ButtonGroup>
          <Button onClick={onAttack} variant="success m-2" className="ml-auto">Attack</Button>
          <span className='p-3 d-inline-block m-1 border rounded roll-dice'>{rollValue[0]}</span>
          <span className='p-3 d-inline-block m-1 border rounded roll-dice'>{rollValue[1]}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HitBar;
