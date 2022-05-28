import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {SetCounterRange} from "./components/SetCounterRange";

function App() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)

    const [count, setCount] = useState<number | 'Enter correct range'>(min);

    const [disabledSet, setDisabledSet] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    //const [settings, setSettings] = useState<boolean>(true)

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
            setCount('Enter correct range')
        }
    }, [min, max])

    const plusOne = () => {
        // @ts-ignore
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
        //setSettings(false)

    }
    /*const goToSettingsHandler = () => {
        setSettings(true)
        setDisabled(false)
    }*/

    return (
        <div className='wrapper'>

                <div className='App'>
                    <SetCounterRange minOnChangeHandler={minOnChangeHandler}
                                     maxOnChangeHandler={maxOnChangeHandler}
                                     onClickHandler={onSetHandler}
                                     minValue={min}
                                     maxValue={max}
                                     disable={disabledSet}/>
                </div>
                <div className='App'>
                    <div className='countBlock'>
                        <Counter count={disabledSet || error ? count : 'Enter correct range'}/>
                    </div>
                    <div className='buttonBlock'>
                        <Button className={count < max ? '' : 'disabledButton'}
                                name={'+1'}
                                callBack={plusOne}
                                disable={count === max || !disabledSet || error}/>
                        <Button className={count === min ? 'disabledButton' : ''}
                                name={'reset'}
                                callBack={reset}
                                disable={count === min || !disabledSet || error}/>
                    </div>
                </div>
        </div>
    );
}

export default App;
