import {combineReducers, legacy_createStore} from "redux";
import {counterReducer, PlusOneAT, ResetAT, SetCountFromLocalStorageAT} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";
import {MaxChangeAT, MinChangeAT} from "./settings-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, loadState())

export type RootStateType = ReturnType<typeof rootReducer>


//отрабатывает при изменении store
store.subscribe(() => {
    saveState( {
        counter: store.getState().counter
    })
    /*localStorage.setItem('state', JSON.stringify(store.getState()))
    localStorage.setItem('count', JSON.stringify(store.getState().counter.count))*/
})

export type ActionTypes = PlusOneAT | SetCountFromLocalStorageAT | ResetAT | MinChangeAT | MaxChangeAT