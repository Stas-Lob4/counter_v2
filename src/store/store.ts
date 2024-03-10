import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from '../reducers/counter_reducer';
import {errorReducer} from '../reducers/error_reducer';
import {loadState, saveState} from '../utils/localstorage-utils';

const RootReducer = combineReducers({
    counter: counterReducer,
    errors: errorReducer
})

export const store =  createStore(RootReducer, loadState())
export type RootState = ReturnType<typeof store.getState>

store.subscribe(()=>{
    saveState({
        counter: store.getState().counter,
        errors: store.getState().errors
    })
})