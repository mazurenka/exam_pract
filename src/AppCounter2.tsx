import React, {useState} from 'react';
import './App.css';

function App() {

    const  [number, setNumber] = useState<number>( 0)
    const numberPlus = () => {setNumber(number + 1)}

    return (
        <div className={'App'}>
            <div className={'numBlock'}>
                <div>{number}</div>
            </div>
            <div className={'buttonBlock'}>
                <button onClick={numberPlus} disabled={(number === 5)}>inc</button>
                <button onClick={() => {setNumber(0)}} disabled={(number === 0)}>reset</button>
            </div>
        </div>
    )
}
export default App;





