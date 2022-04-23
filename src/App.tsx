import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";
import {Count} from "./components/Count";


function App() {

    const [count, setCount] = useState<number>(0);
    const plusOne = () => {
        setCount(count + 1)
    };
    const reset = () => {
        setCount(0)
    }

    return (
        <div className='App'>
            <div className='countBlock' >
                <Count count={count} />
            </div>
            <div className='buttonBlock'>
                <Button className={count < 5 ? '' : 'disabledButton'} name={'+1'} callBack={plusOne}
                        disable={count === 5}/>
                <Button className={count < 1 ? 'disabledButton' : ''} name={'reset'} callBack={reset}
                        disable={count === 0}/>
            </div>
        </div>
    );
}

export default App;
