import React from 'react';
import Counter from './Counter';

const displayCounters = (total) => {
    let allCounters = [];
    for(let index = 0; index < total; index++){
        allCounters.push(<Counter key={index}/>)
    }
    return allCounters;
}

//shorter version
// const displayCounters = total => {
//     return[...Array(total)].map((counter, i) => <Counter key={index}/>)
// }

const CounterList = (props) => {
    return(
        <div className="Counter-row">
            {displayCounters(props.counters)}
        </div>
    )
}

export default CounterList;