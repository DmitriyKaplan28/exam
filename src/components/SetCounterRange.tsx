import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {Button} from "./Button";
import s from './SetCounterRange.module.css'

type SetCounterRangeType = {
    minOnChangeHandler: (value:number) => void
    maxOnChangeHandler: (value:number) => void
    onClickHandler: () => void
}


export const SetCounterRange = (props: SetCounterRangeType) => {


    const minOnChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.minOnChangeHandler(+e.currentTarget.value)
    }
    const maxOnChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
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
                    <input size={5}
                           onChange={maxOnChangeHandler}
                           /*value={min}*//>
                </div>
                <div className={s.input}>
                    <span>min value:</span>
                    <input size={5}
                           onChange={minOnChangeHandler}
                           /*value={max}*//>
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