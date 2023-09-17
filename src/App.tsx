import React, {useEffect, useState} from 'react';
import s from './App..module.css';
import {Counter} from './Counter';
import {Setting} from './Setting';


function App() {

    let valueAsString = localStorage.getItem('counterValue')
    let valueMinValue = localStorage.getItem('minCounterValue')
    let valueMaxValue = localStorage.getItem('maxCounterValue')

    const initMaxValue = 5;

    const [minValue, setMinValue] = useState(valueMinValue ? JSON.parse(valueMinValue) : 0);
    const [maxValue, setMaxValue] = useState(valueMaxValue ? JSON.parse(valueMaxValue) : initMaxValue);
    const initValue = () => valueAsString ? JSON.parse(valueAsString) : minValue
    const [value, setValue] = useState(initValue);

    useEffect(() => {
        setValue(minValue)
    }, [minValue, maxValue]);
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value]);
    useEffect(() => {
        localStorage.setItem('minCounterValue', JSON.stringify(minValue))
    }, [minValue]);
    useEffect(() => {
        localStorage.setItem('maxCounterValue', JSON.stringify(maxValue))
    }, [maxValue]);

    const incCounter = () => setValue(value + 1);
    const decCounter = () => setValue(value - 1)
    const updateMaxValue = (maxCount: number) => setMaxValue(maxCount)
    const updateMinValue = (minCount: number) => setMinValue(minCount)

    const resetCounter = () => {
        localStorage.clear()
        setValue(minValue);
    }

    return (
        <div className={s.App}>
            <Counter
                value={value}
                maxValue={maxValue}
                minValue={minValue}
                incCounter={incCounter}
                decCounter={decCounter}
                resetCounter={resetCounter}
            />

            <Setting
                maxValue={maxValue}
                minValue={minValue}
                updateMaxValue={updateMaxValue}
                updateMinValue={updateMinValue}
            />
        </div>
    );
}

export default App;
