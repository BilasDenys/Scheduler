import {Dispatch, SetStateAction} from "react";
import {IDay} from "../../types/IDay";


export interface IProps {
    setShowModal: (value: boolean) => void,
    setEvents:  Dispatch<SetStateAction<any>>,
    selectedDay: IDay | null
}