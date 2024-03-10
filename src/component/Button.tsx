import React, {ReactNode} from 'react';

type PropsType = {
    onClick: () => void
    disabled?: boolean
    className?: string
    children: ReactNode
}
export const Button: React.FC<PropsType> = ({onClick, disabled, className,children}) => {
    return <button className={className} disabled={disabled} onClick={onClick}>{children}</button>
};
