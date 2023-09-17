import React from 'react';
import s from './Counter.module.css';
import {Input} from './component/Input';
import {Button} from './component/Button';
import { Link } from 'react-router-dom';

type PropsType = {
    value: number
    maxValue: number
    minValue: number
    incCounter: () => void
    decCounter: () => void
    resetCounter: () => void
}

export const Counter:React.FC<PropsType> = ({incCounter, decCounter, resetCounter, value, maxValue, minValue}) => {

    const incDisableBtn = value === maxValue;
    const decDisableBtn = value === minValue;
    const rstDisableBtn = value === minValue;


    return <div className={s.counter}>
        <p>{value}</p>
        <div className={s.button_box}>
            <Button className={s.btn_inc} disabled={incDisableBtn} callBack={incCounter} name={'+1'}/>
            <Button className={s.btn_rst} disabled={rstDisableBtn} callBack={resetCounter} name={'reset'}/>
            <Button className={s.btn_dec} disabled={decDisableBtn} callBack={decCounter} name={'-1'}/>
        </div>
    </div>
};