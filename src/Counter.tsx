import React from 'react';
import s from './Counter.module.css';
import {Input} from './component/Input';
import {Button} from './component/Button';
import { Link } from 'react-router-dom';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

type PropsType = {
    setupActive: boolean
    value: number
    maxValue: number
    minValue: number
    incCounter: () => void
    decCounter: () => void
    resetCounter: () => void
    error: string
}

export const Counter:React.FC<PropsType> = ({incCounter, decCounter, resetCounter, value, maxValue, minValue, setupActive,error}) => {

    const incDisableBtn = value === maxValue;
    const decDisableBtn = value === minValue;
    const rstDisableBtn = value === minValue;


    return <div className={s.counter}>
        <p className={error !== '' ? s.red : ''}>{error !== '' ? error : setupActive ? "нажми SET" : value}</p>
        <div className={s.button_box}>
            <Button className={s.btn_inc} disabled={setupActive || incDisableBtn} callBack={incCounter}>+1</Button>
            <Button className={s.btn_rst} disabled={setupActive || rstDisableBtn} callBack={resetCounter}>reset</Button>
            <Button className={s.btn_dec} disabled={setupActive || decDisableBtn} callBack={decCounter}>-1</Button>
        </div>
    </div>
};