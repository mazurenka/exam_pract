import React, {useReducer} from 'react';
import './App.css';

type ActionType = {
    type: string
}

type AppPropsType = {
    value: number
}

const reducer = (state: number, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 2;
        case "MULTI":
            return state * 2;
        case "RESET":
            return state = 2;
        default:
            return state;
    }
}

function AppReducer(props: AppPropsType) {

    let [state, dispatch] = useReducer(reducer, 2)

    return (
        <div className={'App'}>
            <div className={'numBlock'}>
                <div>{state}</div>
            </div>

            <div className={'buttonBlock'}>

                <button onClick={() => {
                    dispatch({type: "INCREMENT"})
                }} disabled={(state >= 20)}>inc
                </button>

                <button onClick={() => {
                    dispatch({type: "MULTI"})
                }} disabled={(state >= 20)}>multi
                </button>

                <button onClick={() => {
                    dispatch({type: "RESET"})
                }} disabled={(state === 0)}>reset
                </button>

            </div>

        </div>
    )
}

export default AppReducer;





