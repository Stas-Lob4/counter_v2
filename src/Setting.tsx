import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Setting.module.css'
import {Input} from './component/Input';
import {Button} from './component/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store/store';
import {setError, setMaxValueError, setMinValueError} from './reducers/error_reducer';
import {setCounterValueAC, setIsActiveSetup, setMaxValueAC, setMinValueAC} from './reducers/counter_reducer';


type PropsType = {}

export const Setting: React.FC<PropsType> = ({}) => {

    const dispatch = useDispatch()
    const error = useSelector<RootState, string>(state => state.errors.error)
    const errorMinValue = useSelector<RootState, boolean>(state => state.errors.isErrorMinValue)
    const errorMaxValue = useSelector<RootState, boolean>(state => state.errors.isErrorMaxValue)
    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)

    const [minNum, setMinNum] = useState(minValue);
    const [maxNum, setMaxNum] = useState(maxValue);

    // init useEffect
    useEffect(() => {
        if(minNum >= 0 && maxNum > minNum){
            dispatch(setError(''))
            dispatch(setIsActiveSetup(false))
            dispatch(setMaxValueError(false))
            dispatch(setMaxValueError(false))
        }
    }, []);


    // inspect values
    useEffect(() => {
        if(maxNum === maxValue){
            dispatch(setIsActiveSetup(false))
        } else {
            dispatch(setIsActiveSetup(true))
        }

        if(maxNum < 1 || maxNum === minNum){
            dispatch(setError('Incorrect value!'))
            dispatch(setMaxValueError(true))
        } else {
            dispatch(setError(''))
            dispatch(setMaxValueError(false))
        }
    }, [maxNum]);

    // inspect minNum
    useEffect(() => {
        if(minNum === minValue){
            dispatch(setIsActiveSetup(false))
        } else {
            dispatch(setIsActiveSetup(true))

        }

        if(minNum < 0 || minNum >= maxNum){
            dispatch(setError('Incorrect value!'))
            dispatch(setMinValueError(true))
        } else {
            dispatch(setError(''))
            dispatch(setMinValueError(false))
        }
    }, [minNum]);


    const updateMaxValue = (maxCount: number) => {
        dispatch(setMaxValueAC(maxCount))
    }
    const updateMinValue = (minCount: number) => {
        dispatch(setMinValueAC(minCount))
        dispatch(setCounterValueAC(minCount))
    }

    const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMinNum(parseInt(e.currentTarget.value, 10));
    };
    const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxNum(parseInt(e.currentTarget.value, 10));
    };

    const onClickBtnSettingHandler = () => {
        updateMaxValue(maxNum);
        updateMinValue(minNum);
        dispatch(setIsActiveSetup(false))
    }

    let isError = error !== '' || errorMinValue || errorMaxValue

    return (
        <div className={s.setting}>
            <div className={s.setting_inputs_box}>
                <div className={s.setting_value_box}>
                    <span>max value</span>
                    <Input
                        className={(errorMaxValue ? s.red : '')}
                        type={'number'}
                        value={maxNum}
                        onChange={handleMaxInputChange}
                        onBlur={handleMaxInputChange}
                    />
                </div>
                <div className={s.setting_value_box}>
                    <span>min value</span>
                    <Input
                        className={(errorMinValue ? s.red : '')}
                        type={'number'}
                        value={minNum}
                        onChange={handleMinInputChange}
                        onBlur={handleMinInputChange}
                    />
                </div>
            </div>
            <Button disabled={isError} onClick={onClickBtnSettingHandler}>set</Button>
        </div>
    );
};