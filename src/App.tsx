import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/Counter";

function App() {
    const [count, setCount] = useState<number>( 0);

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
        setCount(count + 1)
    };
    const reset = () => {
        setCount(0)
    }
    return (
        <div className='App'>
            <div className='countBlock'>
                <Counter count={count}/>
            </div>
            <div className='buttonBlock'>
                <Button className={count < 5 ? '' : 'disabledButton'}
                        name={'+1'}
                        callBack={plusOne}
                        disable={count === 5}/>
                <Button className={count < 1 ? 'disabledButton' : ''}
                        name={'reset'}
                        callBack={reset}
                        disable={count === 0}/>
            </div>
        </div>
    );
}

export default App;
