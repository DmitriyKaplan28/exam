import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {Button} from "./Button";
import s from './SetCounterRange.module.css'

type SetCounterRangeType = {
    //count: number

}
const [min, setMin] = useState(0)
const [max, setMax] = useState<number>(5)

export const SetCounterRange = (props: SetCounterRangeType) => {

    const onMinInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMin(event.currentTarget.value)
    }
    return (
        <div>
            <div className={s.inputBlock}>
                <div className={s.input}>
                    max value:
                    <input size={5}
                           onChange={onMinInputChange}
                           value={min}/>
                    <Button className={''}
                            name={'+'}
                            callBack={() => {
                            }}
                    />
                </div>
                <div className={s.input}>
                    min value:
                    <input size={5}
                           value={max}/>
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