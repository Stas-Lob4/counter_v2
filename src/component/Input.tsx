import React, {ChangeEvent} from 'react';

type PropsType = {
    value: number
    type?: string
    min?: number
    max?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const Input: React.FC<PropsType> = ({value, type, onChange, onWheel, className, onBlur}) => {
    return <input
        type={type}
        value={value}
        onChange={onChange}
        onWheel={onWheel}
        className={className}
        onBlur={onBlur}
    />
};
