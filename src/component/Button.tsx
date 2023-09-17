import React from 'react';

type PropsType = {
    callBack: () => void
    name: string
    disabled?: boolean
    className?: string
}
export const Button: React.FC<PropsType> = ({callBack, name, disabled, className}) => {
    return <button className={className} disabled={disabled} onClick={callBack}>{name}</button>
};
