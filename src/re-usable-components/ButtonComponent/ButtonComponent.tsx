import React, { memo } from 'react'
import './ButtonComponent.scss';


interface IProps extends  React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonSize: string | undefined,
    setShowModal?: (value: boolean) => void
}

 const ButtonComponentInner: React.FC<IProps> = ({ type, value, onClick, buttonSize,setShowModal} ): JSX.Element => {
    const setShowModalHandler = React.useCallback(() => {
       if (setShowModal) {
           setShowModal(false);
       }
    }, [setShowModal]);
        return (
            <button className={ buttonSize ? `${ buttonSize }` : undefined }
                    onClick={ setShowModalHandler }
                    type={ type }
            >{ value }</button>
        )}

export const ButtonComponent = memo( ButtonComponentInner )