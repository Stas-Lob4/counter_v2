import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Setting.module.css'
import {Input} from './component/Input';
import {Button} from './component/Button';


type PropsType = {
    maxValue: number
    minValue: number
    updateMaxValue: (maxValue: number) => void
    updateMinValue: (minValue: number) => void
    setSetupActive: (v: boolean) => void
    error: string
    setError: (error: string) => void
}
export const Setting: React.FC<PropsType> = ({updateMaxValue, updateMinValue, minValue, maxValue, setError, error, setSetupActive}) => {

    const [minNum, setMinNum] = useState(minValue);
    const [maxNum, setMaxNum] = useState(maxValue);

    const [errorMinNum, setErrorMinNum] = useState(false);
    const [errorMaxNum, setErrorMaxNum] = useState(false);

    let isErrorInputMinValue = isNaN(minNum) || maxNum <= minNum || minNum < 0
    let isErrorInputMaxValue = minNum >= maxNum || isNaN(maxNum) || maxNum <= 0
    let isError = error !== '' || errorMaxNum || errorMinNum || minNum >= maxNum || isNaN(maxNum) || isNaN(minNum)


    useEffect(() => {
        if(errorMinNum || errorMaxNum){
            setError('Incorrect value!')
        } else {
            setError('')
        }
    }, [errorMaxNum, errorMinNum]);

    const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.currentTarget.value, 10);
        setMinNum(newValue);
        setSetupActive(true);

        if (newValue < 0 || newValue >= maxNum) {
            setErrorMinNum(true)
        } else {
            setErrorMinNum(false)
        }
    };
    const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.currentTarget.value, 10);
        setMaxNum(newValue);
        setSetupActive(true);

        if (newValue < minNum || newValue <= 0) {
            setErrorMaxNum(true)
        } else {
            setErrorMaxNum(false)
        }
    };
    const handleMinInputWheel = (e: React.WheelEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = minNum + (e.deltaY > 0 ? -1 : 1);
        setMinNum(newValue);
        setSetupActive(true);

        if (newValue < 0 || newValue >= maxNum) {
            setErrorMinNum(true)
        } else {
            setErrorMinNum(false)
        }
    };
    const handleMaxInputWheel = (e: React.WheelEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = maxNum + (e.deltaY > 0 ? -1 : 1);
        setMaxNum(newValue);
        if (newValue < minNum || newValue <= 0) {
            setMaxNum(newValue);
            setErrorMaxNum(true)
        } else {
            setErrorMaxNum(false)
        }
        setSetupActive(true)
    };
    const onClickBtnSettingHandler = () => {
        updateMaxValue(maxNum);
        updateMinValue(minNum);
        setSetupActive(false)
    }

    return (
        <div className={s.setting}>
            <div className={s.setting_inputs_box}>
                <div className={s.setting_value_box}>
                    <span>max value</span>
                    <Input
                        className={(isErrorInputMaxValue ? s.red : '')}
                        type={'number'}
                        value={maxNum}
                        onChange={handleMaxInputChange}
                        onWheel={handleMaxInputWheel}
                        onBlur={handleMaxInputChange}
                    />
                </div>
                <div className={s.setting_value_box}>
                    <span>min value</span>
                    <Input
                        className={(isErrorInputMinValue ? s.red : '')}
                        type={'number'}
                        value={minNum}
                        onChange={handleMinInputChange}
                        onWheel={handleMinInputWheel}
                        onBlur={handleMinInputChange}
                    />
                </div>
            </div>
            <Button disabled={isError} callBack={onClickBtnSettingHandler}>set</Button>
        </div>
    );
};