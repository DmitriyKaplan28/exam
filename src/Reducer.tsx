export type ActionTypes = {
    action: any
}

type InitialStateType = {
    min: number
    max: number
}

let initialState = {
    min: 0,
    max: 5,
}

const SET_VALUE = 'SET-VALUE'
const PLUS_ONE = 'PLUS-ONE'
const RESET = 'RESET'


/*
export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: '5',
                post: action.newPostText,
                like: '0 likes'
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const plusOne = () => {
    return {
        type: PLUS_ONE,
        setCount(count + 1)
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}*/
