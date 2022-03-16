import {Dispatch, SetStateAction} from "react";
import {IDay} from "../../types/IDay";

export interface IProps {

    setClickedDay: ( day: any ) => void;
    // setClickedDay:  Dispatch<SetStateAction<number>>,
    clickedDay: IDay | null;
    value: number | null;
    current: boolean;
    padding: boolean;
    active: boolean;
    date: string;
    events: any[];

}