import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {SetCounterRange} from "./components/SetCounterRange";

function App() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)

    const [count, setCount] = useState<number>(min);

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
        //setSettings(false)

    }
    /*const goToSettingsHandler = () => {
        setSettings(true)
        setDisabled(false)
    }*/

    const redValueStyleDisplay = error || count === max ? s.redValueDisplay : undefined
    const counterClassName = () => {
        if (error) {
            return `${redValueStyleDisplay} ${s.display} ${s.incorrectValue}`
        } else {
            if (disabledSet) {
                return `${redValueStyleDisplay} ${s.display}`
            } else {
                return `${s.display} ${s.enterValues} `
            }
        }
    }

    return (
        <div className= {s.wrapper}>

                <div className={s.App}>
                    <SetCounterRange minOnChangeHandler={minOnChangeHandler}
                                     maxOnChangeHandler={maxOnChangeHandler}
                                     onClickHandler={onSetHandler}
                                     minValue={min}
                                     maxValue={max}
                                     disable={disabledSet}/>
                </div>
                <div className={s.App}>
                    <div className={counterClassName()}>
                        <Counter count={!disabledSet || min < 0  || max <= min ? 'Enter correct range' : count}/>
                    </div>
                    <div className={s.buttonsContainer}>
                        <Button className={s.buttonPlusOne}
                                name={'+1'}
                                callBack={plusOne}
                                disable={count === max || !disabledSet || error}/>
                        <Button className={ s.buttonReset}
                                name={'reset'}
                                callBack={reset}
                                disable={count === min || !disabledSet || error}/>
                    </div>
                </div>
        </div>
    );
}

export default App;
