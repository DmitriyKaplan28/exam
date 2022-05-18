import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {Button} from "./Button";
import s from './SetCounterRange.module.css'

type SetCounterRangeType = {
    minOnChangeHandler: (newCounterMin: number) => void
    maxOnChangeHandler: (newCounterMax: number) => void
}


export const SetCounterRange = (props: SetCounterRangeType) => {

    const minOnChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.minOnChangeHandler(Number(e.currentTarget.value))
    }
    const maxOnChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.maxOnChangeHandler(Number(e.currentTarget.value))
    }

    return (
        <div>
            <div className={s.inputBlock}>
                <div className={s.input}>
                    max value:
                    <input size={5}
                           onChange={maxOnChangeHandler}
                           /*value={min}*//>
                </div>
                <div className={s.input}>
                    min value:
                    <input size={5}
                           onChange={minOnChangeHandler}
                           /*value={max}*//>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <Button className={''}
                        name={'Set'}
                        callBack={() => {
                        }}
                />
            </div>
        </div>
    );
}