import React, {ChangeEvent} from 'react';

type PropsType = {
    value: number
    type?: string
    min?: number
    max?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void
}

export const Input: React.FC<PropsType> = ({value, type,onChange, onWheel, min,max}) => {
    return <input type={type} value={value} onChange={onChange} onWheel={onWheel} max={max ? max - 1 : undefined} min={min || 0}/>
};
