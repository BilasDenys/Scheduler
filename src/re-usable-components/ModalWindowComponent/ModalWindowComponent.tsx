import React from 'react';
import {IProps} from "./Props";
import './ModalWindowComponent.scss';

const ModalWindowComponent: React.FC<IProps> = ({ children, setShowModal}): JSX.Element =>{
    const showModalHandler = React.useCallback(() => {
        setShowModal(false)
    }, [setShowModal]);

    const preventDefaultHandler = (e: any) => {
        e.stopPropagation();
    }

    return (
        <section className='modal' onClick={showModalHandler}>

            <main className="modal__content" onClick={preventDefaultHandler}>
                { children }
            </main>

        </section>
    );
}

export { ModalWindowComponent };