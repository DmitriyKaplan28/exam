import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {SetCounterRange} from "./components/SetCounterRange";

function App() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)

    const [count, setCount] = useState<number>(min);

    const [disabled, setDisabled] = useState<boolean>(true)
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

    const plusOne = () => {
        setCount(count + 1)
    };
    const reset = () => {
        setCount(min)
    }

    const minOnChangeHandler = (value: number) => {
        setMin(value);
        if (min >= 0 && max > 0 && max > min) {
            setDisabled(false)
        } else {setDisabled(true)};

    }
    const maxOnChangeHandler = (value: number) => {
        setMax(value);
        if (min >= 0 || max > 0 || max > min) {
            setDisabled(false)
        } else {setDisabled(true)};
    }
    const onSetHandler = () => {
        localStorage.setItem('currentValue', JSON.stringify(min));
        localStorage.setItem('currentMin', JSON.stringify(min));
        localStorage.setItem('currentMax', JSON.stringify(max));
        setCount(min);
        setDisabled(!disabled);
    }

    return (
        <div className='wrapper'>
            <div className='App'>
                <SetCounterRange minOnChangeHandler={minOnChangeHandler}
                                 maxOnChangeHandler={maxOnChangeHandler}
                                 onClickHandler={onSetHandler}
                                 minValue={min}
                                 maxValue={max}
                                 disable={disabled}/>
            </div>
            <div className='App'>
                <div className='countBlock'>
                    <Counter count={disabled && !error ? count : 'Enter correct range'}/>
                </div>
                <div className='buttonBlock'>
                    <Button className={count < max ? '' : 'disabledButton'}
                            name={'+1'}
                            callBack={plusOne}
                            disable={count === max}/>
                    <Button className={count === min ? 'disabledButton' : ''}
                            name={'reset'}
                            callBack={reset}
                            disable={count === min}/>
                </div>
            </div>
        </div>
    );
}

export default App;
