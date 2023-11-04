type InitStateType = {

}

const initState = {
    isErrorMinValue: false,
    isErrorMaxValue: false,
    error: ''
}

export const errorReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case 'SET-MIN-VALUE-ERROR':
            return {...state, isErrorMinValue: action.isError}
        case 'SET-MAX-VALUE-ERROR':
            return {...state, isErrorMaxValue: action.isError}
        case 'SET-ERROR':
            return {...state, error: action.title}
        default:
            return state
    }
}

type ActionType = SetMinValueErrorType | SetMaxValueErrorType | SetErrorType

type SetMinValueErrorType = ReturnType<typeof setMinValueError>
export const setMinValueError = (isError: boolean) => {
    return {
        type: 'SET-MIN-VALUE-ERROR',
        isError
    } as const
}
type SetMaxValueErrorType = ReturnType<typeof setMaxValueError>
export const setMaxValueError = (isError: boolean) => {
    return {
        type: 'SET-MAX-VALUE-ERROR',
        isError
    } as const
}

type SetErrorType = ReturnType<typeof setError>
export const setError = (title: string) => {
    return {
        type: 'SET-ERROR',
        title
    } as const
}

