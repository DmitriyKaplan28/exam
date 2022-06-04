import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {SetCounterRange} from "./components/SetCounterRange";

function App() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)

    const [count, setCount] = useState<number>(min);

    const [disabledSet, setDisabledSet] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        let countAsString = localStorage.getItem('currentValue')
        if (countAsString) {
            let newCount = JSON.parse(countAsString);
            setCount(newCount)
        }
        let minAsString = localStorage.getItem('currentMin')
        if (minAsString) {
            let newMin = JSON.parse(minAsString);
            setMin(newMin)
        }
        let maxAsString = localStorage.getItem('currentMax')
        if (maxAsString) {
            let newMax = JSON.parse(maxAsString);
            setMax(newMax)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('currentValue', JSON.stringify(count))
    })

    useEffect(() => {
        if (min < 0  || max <= min) {
            setDisabledSet(true)
            setError(true)
        }
    }, [min, max])

    const plusOne = () => {
        setCount(count + 1)
    };
    const reset = () => {
        setCount(min)
    }

    const minOnChangeHandler = (value: number) => {
        setMin(value);
        setDisabledSet(false)
    }
    const maxOnChangeHandler = (value: number) => {
        setMax(value);
        setDisabledSet(false)
    }
    const onSetHandler = () => {
        localStorage.setItem('currentValue', JSON.stringify(min));
        localStorage.setItem('currentMin', JSON.stringify(min));
        localStorage.setItem('currentMax', JSON.stringify(max));
        setCount(min);
        setDisabledSet(true);
        setError(false)
        console.log(error)
    }

    return (
        <div className= {s.wrapper}>
                <div className={s.App}>
                    <SetCounterRange minOnChangeHandler={minOnChangeHandler}
                                     maxOnChangeHandler={maxOnChangeHandler}
                                     onClickHandler={onSetHandler}
                                     minValue={min}
                                     maxValue={max}
                                     disable={disabledSet}
                    />
                </div>
                <div className={s.App}>
                        <Counter count={count}
                                 plusOne={plusOne}
                                 reset={reset}
                                 disabledSet={disabledSet}
                                 error={error}
                                 min={min}
                                 max={max}
                        />
                </div>
        </div>
    );
}

export default App;
