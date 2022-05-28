import React from 'react';
import s from './Counter.module.css';
import {Button} from "./Button";

type CountType = {
    count: number | string
    plusOne: () => void
    reset: () => void
    disabledSet: boolean
    error: boolean
    min: number
    max: number

}

export const Counter = (props: CountType) => {

    const redValueStyleDisplay = props.error || props.count === props.max ? s.redValueDisplay : undefined
    const counterClass = () => {
        if (props.error) {
            return `${redValueStyleDisplay} ${s.display} ${s.incorrectValue}`
        } else {
            if (props.disabledSet) {
                return `${redValueStyleDisplay} ${s.display}`
            } else {
                return `${s.display} ${s.enterValues} `
            }
        }
    }

    return (
        <div>
            <div className={counterClass()}>{!props.disabledSet || props.min < 0  || props.max <= props.min ? 'Enter correct range' : props.count}</div>
            <div className={s.buttonsContainer}>
                <Button className={s.buttonPlusOne}
                        name={'+1'}
                        callBack={props.plusOne}
                        disable={props.count === props.max || !props.disabledSet || props.error}/>
                <Button className={s.buttonReset}
                        name={'reset'}
                        callBack={props.reset}
                        disable={props.count === props.min || !props.disabledSet || props.error}/>
            </div>
        </div>
    );
}