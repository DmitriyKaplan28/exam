import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import s from './SetCounterRange.module.css'

type SetCounterRangeType = {
    minOnChangeHandler: (value: number) => void
    maxOnChangeHandler: (value: number) => void
    onClickHandler: () => void
    minValue: number
    maxValue: number
    disable: boolean
}

export const SetCounterRange = (props: SetCounterRangeType) => {

    const minOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.minOnChangeHandler(+e.currentTarget.value)
    }
    const maxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxOnChangeHandler(+e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.onClickHandler()
    }

    const inputErrorStyle = props.minValue < 0 || props.maxValue <= props.minValue ? s.errorInput : ""

    return (
        <div>
            <div className={s.inputBlock}>
                <div className={s.inputItem}>
                    <span>max value:</span>
                    <input type={"number"}
                           onChange={maxOnChangeHandler}
                           value={props.maxValue}
                           className={`${s.inputArea} ${inputErrorStyle}`}/>
                </div>
                <div className={s.inputItem}>
                    <span>min value:</span>
                    <input type={"number"}
                           onChange={minOnChangeHandler}
                           value={props.minValue}
                           className={`${s.inputArea} ${inputErrorStyle}`}/>
                </div>
            </div>
            <div className={s.buttonsContainer}>
                <Button className={s.buttonSet}
                        name={'Set'}
                        callBack={onClickHandler}
                        disable={props.disable}
                />
            </div>
        </div>
    );
}