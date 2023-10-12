import React from 'react';

type PropsType = {
    callBack: () => void
    disabled?: boolean
    className?: string
    children: string
}
export const Button: React.FC<PropsType> = ({callBack, disabled, className,children}) => {
    return <button className={className} disabled={disabled} onClick={callBack}>{children}</button>
};
