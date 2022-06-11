import {ActionTypes} from "./store";

export type MinChangeAT = ReturnType<typeof minChangeAC>
export type MaxChangeAT = ReturnType<typeof maxChangeAC>

type InitialStateType = {
    min: number
    max: number
}

let initialState = {
    min: 0,
    max: 5
}

export const settingsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'MIN_CHANGE':
            return {...state, min: action.min}
        case 'MAX_CHANGE':
            return {...state, max: action.max}

        default:
            return state;
    }
}

export const minChangeAC = (min:number) => {
    return {
        type: 'MIN_CHANGE',
        min
    } as const
}

export const maxChangeAC = (max:number) => {
    return {
        type: 'MAX_CHANGE',
        max
    } as const
}


