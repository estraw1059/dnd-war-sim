import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import React, {useState} from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const FistPunchHammer = () => {
    const [attackRoll, setAttackRoll] = useState(0);
    const [regularDamage, setRegularDamageRoll] = useState(0);
    const [rollingDamage, setRollingDamage] = useState(0);
    const [fireDamage, setFireDamageRoll] = useState(0);

    const rollAttack = () => {
        const roll = new DiceRoll('1d20+14');
        setAttackRoll(roll.total);
    }

    const rollDamage = () => {
        const baseDamage = new DiceRoll('1d10 + 8');
        setRegularDamageRoll(baseDamage.total);
        if (rollingDamage + baseDamage.total >= 15) {
            // We need to do additional damage
            const fireDamage = new DiceRoll('2d8 + 1d6');
            setFireDamageRoll(fireDamage.total);
        } else {
            setFireDamageRoll(0)
        }

        setRollingDamage(currentRolling => (currentRolling + baseDamage.total)%15);
    }


    return (
                <Container className='fist-punch-container'>
                    <Row className='p-3 m-1 border rounded'>
                        <Col>
                            <Button onClick={rollAttack} variant="success m-2" className="ml-auto">Attack</Button>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="d-flex align-items-center justify-content-center">
                                    <span>Attack Roll</span>
                                </Col>
                                <Col>
                                    <span className='p-3 d-inline-block m-1 border rounded roll-dice'>{attackRoll}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='p-3 m-1 border rounded'>
                        <Col>
                            <Button onClick={rollDamage} variant="success m-2" className="ml-auto">Damage</Button>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="d-flex align-items-center justify-content-center">
                                    <span>Base Damage</span>
                                </Col>
                                <Col>
                                    <span className='p-3 d-inline-block m-1 border rounded roll-dice'>{regularDamage}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex align-items-center justify-content-center">
                                    <span>Fire Damage</span>
                                </Col>
                                <Col>
                                    <span className='p-3 d-inline-block m-1 border rounded roll-dice'>{fireDamage}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex align-items-center justify-content-center">
                                    <span>Total Damage</span>
                                </Col>
                                <Col>
                                    <span className='p-3 d-inline-block m-1 border rounded roll-dice'>{regularDamage + fireDamage}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
    );
};

export default FistPunchHammer;