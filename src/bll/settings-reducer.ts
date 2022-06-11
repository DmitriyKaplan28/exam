import {ActionTypes} from "./store";

export type MinChangeAT = ReturnType<typeof minChangeAC>
export type MaxChangeAT = ReturnType<typeof maxChangeAC>
export type SetRangeFromLocalStorageAT = ReturnType<typeof setRangeFromLocalStorageAC>
export type SetDisabledSetAndErrorAT = ReturnType<typeof setDisabledSetAndErrorAC>

export type InitialSettingsStateType = {
    min: number
    max: number
    disabledSet: boolean
    error: boolean
}

let initialState = {
    min: 0,
    max: 5,
    disabledSet: true,
    error: false
}

export const settingsReducer = (state: InitialSettingsStateType = initialState, action: ActionTypes): InitialSettingsStateType => {
    switch (action.type) {
        case 'MIN_CHANGE':
            return {...state, min: action.min, disabledSet:action.disabledSet}
        case 'MAX_CHANGE':
            return {...state, max: action.max, disabledSet:action.disabledSet}
        case 'SET_RANGE_FROM_LOCAL_STORAGE':
            return {...state, min: action.min, max: action.max}
        case 'SET_DISABLESET_AND_ERROR':
            return {...state, disabledSet:action.disabledSet, error: action.error}
        default:
            return state;
    }
}

export const minChangeAC = (min:number, disabledSet:boolean) => {
    return {
        type: 'MIN_CHANGE',
        min, disabledSet
    } as const
}

export const maxChangeAC = (max:number, disabledSet:boolean) => {
    return {
        type: 'MAX_CHANGE',
        max, disabledSet
    } as const
}

export const setRangeFromLocalStorageAC = (min: number, max: number) => {
    return {
        type: 'SET_RANGE_FROM_LOCAL_STORAGE',
        min, max
    } as const
}

export const setDisabledSetAndErrorAC = (disabledSet:boolean, error: boolean) => {
    return {
        type: 'SET_DISABLESET_AND_ERROR',
        disabledSet, error
    } as const
}

