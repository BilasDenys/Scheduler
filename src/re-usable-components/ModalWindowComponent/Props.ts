import {Dispatch, SetStateAction} from "react";

export interface IProps {

    children: JSX.Element,
    setShowModal: (value: boolean) => void,
    // showModal: boolean
}
