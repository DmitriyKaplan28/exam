import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {SetCounterRange} from "./components/SetCounterRange";
import {RootStateType} from "./bll/store";
import {InitialCounterStateType, plusOneAC, resetAC} from "./bll/counter-reducer";
import {InitialSettingsStateType, maxChangeAC, minChangeAC, setDisabledSetAndErrorAC} from "./bll/settings-reducer";

function App() {

    const counter = useSelector<RootStateType, InitialCounterStateType>(state => state.counter)
    const settings = useSelector<RootStateType, InitialSettingsStateType>(state => state.settings)

    const dispatch = useDispatch()

    const minOnChangeHandler = (value: number) => {
        dispatch(minChangeAC(value, false));
    }
    const maxOnChangeHandler = (value: number) => {
        dispatch(maxChangeAC(value, false));
    }

    const onSetHandler = () => {
        dispatch(setDisabledSetAndErrorAC(true, false))
    }

    useEffect(() => {
        if (settings.min < 0 || settings.max <= settings.min) {
            dispatch(setDisabledSetAndErrorAC(true, true))
        }
    }, [settings.min, settings.max])


    const plusOne = () => {
        dispatch(plusOneAC())
    };

    const reset = () => {
        dispatch(resetAC(settings.min))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.App}>
                <SetCounterRange minOnChangeHandler={minOnChangeHandler}
                                 maxOnChangeHandler={maxOnChangeHandler}
                                 onClickHandler={onSetHandler}
                                 minValue={settings.min}
                                 maxValue={settings.max}
                                 disable={settings.disabledSet}
                />
            </div>
            <div className={s.App}>
                <Counter count={counter.count}
                         plusOne={plusOne}
                         reset={reset}
                         disabledSet={settings.disabledSet}
                         error={settings.error}
                         min={settings.min}
                         max={settings.max}
                />
            </div>
        </div>
    );
}

export default App;
