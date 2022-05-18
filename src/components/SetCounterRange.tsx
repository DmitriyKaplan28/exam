import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {Button} from "./Button";
import s from './SetCounterRange.module.css'

type SetCounterRangeType = {
    minOnChangeHandler: (value: number) => void
    maxOnChangeHandler: (value: number) => void
    onClickHandler: () => void
    minValue: number
    maxValue: number
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

    return (
        <div>
            <div className={s.inputBlock}>
                <div className={s.input}>
                    <span>max value:</span>
                    <input type={"number"}
                           size={5}
                           onChange={maxOnChangeHandler}
                           value={props.maxValue}/>
                </div>
                <div className={s.input}>
                    <span>min value:</span>
                    <input type={"number"}
                           size={5}
                           onChange={minOnChangeHandler}
                           value={props.minValue}/>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <Button className={''}
                        name={'Set'}
                        callBack={onClickHandler}
                />
            </div>
        </div>
    );
}