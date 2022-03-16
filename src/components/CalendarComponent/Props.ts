import {Dispatch, SetStateAction} from "react";
import {IDay} from "../../types/IDay";

export interface IProps {

    parentClickedDay: Dispatch<SetStateAction<IDay | null>>

}