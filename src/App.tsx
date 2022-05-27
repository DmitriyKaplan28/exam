import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {SetCounterRange} from "./components/SetCounterRange";

function App() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)

    const [count, setCount] = useState<number>(min);

    const [disabled, setDisabled] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [settings, setSettings] = useState<boolean>(true)

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
        if (min >= 0 && max > 0 && max > min) {//
            setDisabled(false)
            setError(false)
        } else {
            setDisabled(true)
            setError(true)
        }
        ;
    }, [min, max])

    const plusOne = () => {
        setCount(count + 1)
    };
    const reset = () => {
        setCount(min)
    }

    const minOnChangeHandler = (value: number) => {
        setMin(value);
        /* console.log(disabled)
         console.log(error)*/
        console.log(disabled || error)
    }
    const maxOnChangeHandler = (value: number) => {
        setMax(value);
    }
    const onSetHandler = () => {
        localStorage.setItem('currentValue', JSON.stringify(min));
        localStorage.setItem('currentMin', JSON.stringify(min));
        localStorage.setItem('currentMax', JSON.stringify(max));
        setCount(min);
        setDisabled(true);
        setSettings(false)
        console.log(disabled)
    }
    const goToSettingsHandler = () => {
        setSettings(true)
        setDisabled(false)
    }

    return (
        <div className='wrapper'>
            {settings ?
                <div className='App'>
                    <SetCounterRange minOnChangeHandler={minOnChangeHandler}
                                     maxOnChangeHandler={maxOnChangeHandler}
                                     onClickHandler={onSetHandler}
                                     minValue={min}
                                     maxValue={max}
                                     disable={disabled}/>
                </div> :
                <div className='App'>
                    <div className='countBlock'>
                        <Counter count={disabled ? count : 'Enter correct range'}/>
                    </div>
                    <div className='buttonBlock'>
                        <Button className={count < max ? '' : 'disabledButton'}
                                name={'+1'}
                                callBack={plusOne}
                                disable={count === max || !disabled || error}/>
                        <Button className={count === min ? 'disabledButton' : ''}
                                name={'reset'}
                                callBack={reset}
                                disable={count === min || !disabled || error}/>
                        <Button className={''}
                                name={'Go to settings'}
                                callBack={goToSettingsHandler}
                                disable={false}/>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
