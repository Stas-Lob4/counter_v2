import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Setting.module.css'
import {Input} from './component/Input';
import {Button} from './component/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store/store';
import {setError, setMaxValueError, setMinValueError} from './reducers/error_reducer';
import {setIsActiveSetup} from './reducers/counter_reducer';


type PropsType = {
    maxValue: number
    minValue: number
    updateMaxValue: (maxValue: number) => void
    updateMinValue: (minValue: number) => void
    error: string
}
export const Setting: React.FC<PropsType> = ({updateMaxValue, updateMinValue, minValue, maxValue, error}) => {
    const dispatch = useDispatch()

    const [minNum, setMinNum] = useState(minValue);
    const [maxNum, setMaxNum] = useState(maxValue);

    const errorMinNum = useSelector<RootState, boolean>(state => state.errors.isErrorMinValue)
    const errorMaxNum = useSelector<RootState, boolean>(state => state.errors.isErrorMaxValue)

    let isErrorInputMinValue = isNaN(minNum) || maxNum <= minNum || minNum < 0
    let isErrorInputMaxValue = minNum >= maxNum || isNaN(maxNum) || maxNum <= 0
    let isError = error !== '' || errorMaxNum || errorMinNum || minNum >= maxNum || isNaN(maxNum) || isNaN(minNum)

    useEffect(() => {
        if(errorMinNum || errorMaxNum){
            dispatch(setError('Incorrect value!'))
        } else {
            dispatch(setError(''))
        }
    }, [errorMaxNum, errorMinNum]);


    const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.currentTarget.value, 10);
        setMinNum(newValue);
        dispatch(setIsActiveSetup(true))
        if (newValue < 0 || newValue >= maxNum) {
            dispatch(setMinValueError(true))
        } else {
            dispatch(setMinValueError(false))
        }
    };
    const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.currentTarget.value, 10);
        setMaxNum(newValue);
        dispatch(setIsActiveSetup(true))
        if (newValue < 1 || newValue === minNum) {
            dispatch(setMaxValueError(true))
        } else {
            dispatch(setMaxValueError(false))
        }
    };

    const onClickBtnSettingHandler = () => {
        updateMaxValue(maxNum);
        updateMinValue(minNum);
        dispatch(setIsActiveSetup(false))
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
                        onBlur={handleMinInputChange}
                    />
                </div>
            </div>
            <Button disabled={isError} callBack={onClickBtnSettingHandler}>set</Button>
        </div>
    );
};