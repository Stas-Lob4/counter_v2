import React, {useEffect} from 'react';
import s from './Counter.module.css';
import {Button} from './component/Button';
import {setCounterValueAC} from './reducers/counter_reducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store/store';

type PropsType = {}

export const Counter:React.FC<PropsType> = ({}) => {

    const counterValue = useSelector<RootState, number>(state => state.counter.counterValue)
    const error = useSelector<RootState, string>(state => state.errors.error)
    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)
    const setupActive = useSelector<RootState, boolean>(state => state.counter.setupIsActive)

    const dispatch = useDispatch()
    const incCounter = () => {
        dispatch(setCounterValueAC(counterValue + 1))
    };
    const decCounter = () => {
        dispatch(setCounterValueAC(counterValue - 1))
    }
    const resetCounter = () => {
        dispatch(setCounterValueAC(minValue))
    }

    const isMaxValue = counterValue === maxValue;
    const decDisableBtn = counterValue === minValue;
    const rstDisableBtn = counterValue === minValue;


    return <div className={s.counter}>
        <p className={error !== '' ? s.red_value : isMaxValue ? s.red : ''}>{error !== '' ? error : setupActive ? "нажми SET" : counterValue}</p>
        <div className={s.button_box}>
            <Button className={s.btn_inc} disabled={setupActive || isMaxValue} onClick={incCounter}>+1</Button>
            <Button className={s.btn_rst} disabled={setupActive || rstDisableBtn} onClick={resetCounter}>reset</Button>
            <Button className={s.btn_dec} disabled={setupActive || decDisableBtn} onClick={decCounter}>-1</Button>
        </div>
    </div>
};