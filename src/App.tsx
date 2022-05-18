import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";
import {SetCounterRange} from "./components/SetCounterRange";

function App() {
    const [count, setCount] = useState<number>(0);
    const [min, setMin] = useState(0)
    const [max, setMax] = useState<number>(5)
    useEffect(() => {
        let countAsString = localStorage.getItem('currentValue')
        if (countAsString) {
            let newCount = JSON.parse(countAsString);
            setCount(newCount)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('currentValue', JSON.stringify(count))
    }, [count])

    const plusOne = () => {
        setCount(min + 1)
    };
    const reset = () => {
        setCount(min)
    }



    const minOnChangeHandler = (newCounterMin: number) => {
        setMin(newCounterMin)
        console.log(min)
    }
    const maxOnChangeHandler = (newCounterMax: number) => {
        setMax(newCounterMax)
        console.log(max)
    }

    return (
        <div className='wrapper'>
            <div className='App'>
                <SetCounterRange minOnChangeHandler={minOnChangeHandler}
                                 maxOnChangeHandler={maxOnChangeHandler}/>
            </div>
            <div className='App'>
                <div className='countBlock'>
                    <Counter count={count}/>
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
