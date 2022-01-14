import React, { useState } from "react"

export function CounterBLL() {

    let numberStart = 0;

    const [number, setNumber] = useState(numberStart)

    let numberPlus = () => {setNumber(number + 1)}
    let numberReset = () => {setNumber(0)}

    return (
        <div className={'App'}>
            <CounterUI number={number} numberPlus={numberPlus} numberReset={numberReset}/>
        </div>
    )
}

type CounterUIType = {
    number: number
    numberPlus: () => void
    numberReset: () => void
}

function CounterUI(props: CounterUIType) {
    let maxValue = props.number === 5

    return (
            <div className={'Counter'}>
                <div className={'Screen'}>
                <span className={maxValue ? 'RedNumber' : ''}>
                    {props.number}
                </span>
                </div>

                <div className={'buttonBlock'}>
                    <button
                        className={'buttons'}
                        onClick={props.numberPlus}
                        disabled={(maxValue)}>
                        inc
                    </button>

                    <button
                        className={'buttons'}
                        onClick={props.numberReset}>
                        reset
                    </button>
                </div>
            </div>
        )
}








