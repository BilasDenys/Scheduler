import {Dispatch, SetStateAction} from "react";

export interface IProps {

    setClickedDay: ( day: any ) => void;
    // setClickedDay:  Dispatch<SetStateAction<number>>,
    clickedDay: number;
    value: number | null;
    current: boolean;
    padding: boolean;
    active: boolean;
    date: string;
    events: any[];

}