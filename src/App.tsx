import React, {useEffect, useState} from 'react';
import s from './App..module.css';
import {Counter} from './Counter';
import {Setting} from './Setting';
import {initMaxValue, initMinValue, saveLocalStorageData} from './data/data_init';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store/store';
import {setCounterValueAC, setMaxValueAC, setMinValueAC} from './reducers/counter_reducer';



function App() {

    // let valueAsString = localStorage.getItem('counterValue')
    // let valueMinValue = localStorage.getItem('minCounterValue')
    // let valueMaxValue = localStorage.getItem('maxCounterValue')

    const dispatch = useDispatch()
    const error = useSelector<RootState, string>(state => state.errors.error)

    const counterValue = useSelector<RootState, number>(state => state.counter.counterValue)
    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)
    const setupActive = useSelector<RootState, boolean>(state => state.counter.setupIsActive)



    const incCounter = () => {
        const newValue = counterValue + 1
       // saveLocalStorageData('counterValue', newValue)
        dispatch(setCounterValueAC(newValue))
    };
    const decCounter = () => {
        const newValue = counterValue - 1
        //saveLocalStorageData('counterValue', newValue)
        dispatch(setCounterValueAC(newValue))
    }
    const updateMaxValue = (maxCount: number) => {
        //saveLocalStorageData('maxCounterValue', maxCount)
        dispatch(setMaxValueAC(maxCount))
    }
    const updateMinValue = (minCount: number) => {
        //saveLocalStorageData('minCounterValue', minCount)
        dispatch(setMinValueAC(minCount))
        dispatch(setCounterValueAC(minCount))
    }
    const resetCounter = () => {
        dispatch(setCounterValueAC(minValue))
    }

    return (
        <div className={s.App}>
            <Counter
                error={error}
                setupActive={setupActive}
                value={counterValue}
                maxValue={maxValue}
                minValue={minValue}
                incCounter={incCounter}
                decCounter={decCounter}
                resetCounter={resetCounter}
            />

            <Setting
                error={error}
                maxValue={maxValue}
                minValue={minValue}
                updateMaxValue={updateMaxValue}
                updateMinValue={updateMinValue}
            />
        </div>
    );
}

export default App;
