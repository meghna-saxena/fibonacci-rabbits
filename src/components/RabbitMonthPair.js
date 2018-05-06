import React from 'react';
import Rabbit from '../components/Rabbit';

const RabbitMonthPair = (props) => {
    const { month, rabbitCount } = props.mwr;

    let result = [];
    for (let i = 0; i < rabbitCount; i++) {
        result = [...result, <Rabbit key={rabbitCount + i} />]
    }
    return (
        <li className="list-group-item"> 
        Month: {month} <br />
        {result}
        </li>
    );
}

export default RabbitMonthPair;