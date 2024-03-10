import {RootState} from '../store/store';


export const saveLocalStorageData = (key: string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value))
}


export const loadState =()=>{
    try{
        const serializedState = localStorage.getItem('counter-values');
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState);
    } catch (err){
        return undefined
    }
}

export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter-values', serializedState);
    } catch {
        // ignore write errors
    }
};

