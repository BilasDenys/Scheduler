import React from 'react';
import { IProps } from './IProps';
import './DayComponent.scss';
import { NormalizeTitle } from "../../utils/NormalizeTitle";

const DayComponent: React.FC<IProps> = ({ active, current, value, setClickedDay, clickedDay }) => {

    const setActiveDay = (): void => {
        setClickedDay(value)
    }

    return <div onClick={ setActiveDay }
                className= {
                    ` day ${ Number( value ) > 0 ? 'day' : 'paddingDays' }
                          ${ current ? 'currentDay' : null } 
                          ${ clickedDay === value ? 'active': null }
                    ` }>
        { value === null ? null :NormalizeTitle(value) }
    </div>;
};


export { DayComponent };