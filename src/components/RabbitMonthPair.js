import React from 'react';
import Rabbit from '../components/Rabbit';

const RabbitMonthPair = (props) => {
    const {month, count} = props

    const result = [...Array(count).keys()]; //makes empty array of key/index till count value

    const newResult = result.map((cnt, i) => {
        return <Rabbit key={count + i} />
    });

    return (
        <div className="result">
            <li className="list-group-item">
                Month:{month} <br />
                {newResult}
            </li>
        </div>
    );
}

export default RabbitMonthPair;