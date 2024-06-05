import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Card>
            <Card.Body>
                <Button onClick={rollAttack} variant="success m-2" className="ml-auto">Attack</Button>
                <span className='p-3 d-inline-block m-1 border rounded roll-dice'>{attackRoll}</span>
                <Button onClick={rollDamage} variant="success m-2" className="ml-auto">Damage</Button>
                <span>Base Damage</span><span className='p-3 d-inline-block m-1 border rounded roll-dice'>{regularDamage}</span>
                <span>Fire Damage</span><span className='p-3 d-inline-block m-1 border rounded roll-dice'>{fireDamage}</span>
                <span>Total Damage</span><span className='p-3 d-inline-block m-1 border rounded roll-dice'>{regularDamage + fireDamage}</span>
            </Card.Body>
        </Card>
    );
};

export default FistPunchHammer;