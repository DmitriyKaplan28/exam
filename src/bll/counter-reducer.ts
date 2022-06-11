import {ActionTypes} from "./store";

export type PlusOneAT = ReturnType<typeof plusOneAC>
export type SetCountFromLocalStorageAT = ReturnType<typeof setCountFromLocalStorageAC>
export type ResetAT = ReturnType<typeof resetAC>


export type InitialCounterStateType = {
    count: number
}

let initialState = {
    count: 0
}

export const counterReducer = (state: InitialCounterStateType = initialState, action: ActionTypes): InitialCounterStateType => {
    switch (action.type) {
        case 'PLUS_ONE':
            return {...state, count: state.count + 1}
        case 'SET_COUNT_FROM_LOCAL_STORAGE':
            return {...state, count: action.count}
        case 'RESET':
            return {...state, count: action.min}
        case 'MIN_CHANGE':
            return {...state, count: action.min}
        default:
            return state;
    }
}

export const plusOneAC = () => {
    return {
        type: 'PLUS_ONE',
    } as const
}

export const resetAC = (min: number) => {
    return {
        type: 'RESET', min
    } as const
}

export const setCountFromLocalStorageAC = (count: number) => {
    return {
        type: 'SET_COUNT_FROM_LOCAL_STORAGE',
        count
    } as const
}


