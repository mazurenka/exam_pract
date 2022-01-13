import React, {useState} from 'react';
import './App.css';
import { Counter } from './Counter';

export function App() {
    const [number, setNumber] = useState(0)

    let numberPlus = () => {setNumber(number + 1)}
    let numberReset = () => {setNumber(0)}

    return (
        <div className={'App'}>
            <Counter number={number} numberPlus={numberPlus} numberReset={numberReset}/>
        </div>
    )
}






