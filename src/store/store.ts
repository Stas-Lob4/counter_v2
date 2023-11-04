import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from '../reducers/counter_reducer';
import {errorReducer} from '../reducers/error_reducer';

const RootReducer = combineReducers({
    counter: counterReducer,
    errors: errorReducer
})

export const store =  createStore(RootReducer)
export type RootState = ReturnType<typeof store.getState>