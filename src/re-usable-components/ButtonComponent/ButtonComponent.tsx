import React, { memo } from 'react'
import './ButtonComponent.scss';


interface IProps extends  React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonSize: string | undefined
}

 const ButtonComponentInner: React.FC<IProps> = ({ type, value, onClick, buttonSize} ) => {
        return (
            <button className={ buttonSize ? `${ buttonSize }` : undefined }
                    onClick={onClick}
                    type={ type }
            >{ value }</button>
        )}

export const ButtonComponent = memo( ButtonComponentInner )