import React, {useEffect, useState} from 'react';
import s from './App..module.css';
import {Counter} from './Counter';
import {Setting} from './Setting';
import {initMaxValue, initMinValue, saveLocalStorageData} from './data/data_init';



function App() {

    let valueAsString = localStorage.getItem('counterValue')
    let valueMinValue = localStorage.getItem('minCounterValue')
    let valueMaxValue = localStorage.getItem('maxCounterValue')

    const [minValue, setMinValue] = useState(valueMinValue ?  +valueMinValue : initMinValue);
    const [maxValue, setMaxValue] = useState(valueMaxValue ?  +valueMaxValue : initMaxValue);
    const initValue = () => valueAsString ? +(valueAsString) : minValue
    const [counter, setCounter] = useState<number>(initValue);

    const [setupActive, setSetupActive] = useState(false)

    const SetupActiveHandler = (v: boolean) => setSetupActive(v)

    const [error, setError] = useState('')

    const incCounter = () => {
        const newValue = counter + 1
        saveLocalStorageData('counterValue', newValue)
        setCounter(newValue)
    };
    const decCounter = () => {
        const newValue = counter - 1
        saveLocalStorageData('counterValue', newValue)
        setCounter(newValue)
    }
    const updateMaxValue = (maxCount: number) => {
        saveLocalStorageData('maxCounterValue', maxCount)
        setMaxValue(maxCount)
    }
    const updateMinValue = (minCount: number) => {
        saveLocalStorageData('minCounterValue', minCount)
        setMinValue(minCount)
        setCounter(minCount)
    }
    const resetCounter = () => {
        localStorage.clear()
        setCounter(minValue);
    }

    return (
        <div className={s.App}>
            <Counter
                error={error}
                setupActive={setupActive}
                value={counter}
                maxValue={maxValue}
                minValue={minValue}
                incCounter={incCounter}
                decCounter={decCounter}
                resetCounter={resetCounter}
            />

            <Setting
                error={error}
                setError={setError}
                maxValue={maxValue}
                minValue={minValue}
                updateMaxValue={updateMaxValue}
                updateMinValue={updateMinValue}
                setSetupActive={SetupActiveHandler}
            />
        </div>
    );
}

export default App;
