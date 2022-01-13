import React from "react";

type CounterPropsType = {
    number: number
    numberPlus: () => void
    numberReset: () => void
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={'Counter'}>
            <div className={'Screen'}>
                <span className={props.number === 5 ? 'RedNumber' : ''}>
                    {props.number}
                </span>
            </div>

            <div className={'buttonBlock'}>
                <button
                    className={'buttons'}
                    onClick={props.numberPlus}
                    disabled={(props.number === 5)}>
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

