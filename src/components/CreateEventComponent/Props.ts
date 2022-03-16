import {Dispatch, SetStateAction} from "react";
import {IDay} from "../../types/IDay";


export interface IProps {
    setShowModal: (value: boolean) => void,
    setEvent:  Dispatch<SetStateAction<any>>,
    selectedDay: IDay | null
}