export type InitialStateType = {
    maxValue: number
    minValue: number
    counterValue: number
    setupIsActive: boolean
}

const initialState: InitialStateType = {
    maxValue: 5,
    minValue: 0,
    counterValue: 0,
    setupIsActive: false
}
export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type){
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.payload.newValue}
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.payload.newValue, counterValue: action.payload.newValue}
        case 'SET-COUNTER-VALUE':
            return {...state, counterValue: action.payload.newValue}
        case 'SET-IS-ACTIVE-SETUP':
            return {...state, setupIsActive: action.payload.value}
        default:
            return state
    }
}

type ActionType = SetMaxValueType | SetMinValueType | SetCounterValueType | SetIsActiveSetupType

type SetMaxValueType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (newValue: number) => {
    return {
        type: "SET-MAX-VALUE",
        payload: {newValue}
    } as const
}

type SetMinValueType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (newValue: number) => {
    return {
        type: "SET-MIN-VALUE",
        payload: {newValue}
    } as const
}

type SetCounterValueType = ReturnType<typeof setCounterValueAC>
export const setCounterValueAC = (newValue: number) => {
    return {
        type: "SET-COUNTER-VALUE",
        payload: {newValue}
    } as const
}
type SetIsActiveSetupType = ReturnType<typeof setIsActiveSetup>
export const setIsActiveSetup = (value: boolean) => {
    return {
        type: "SET-IS-ACTIVE-SETUP",
        payload: {value}
    } as const
}