import React, { memo} from 'react';
import { IProps } from './IProps';
import './DayComponent.scss';
import { NormalizeTitle } from "../../utils/NormalizeTitle";

const DayComponentInner: React.FC<IProps> = (props): JSX.Element => {
    const setActiveDay = (): void => {
        props.setClickedDay(props);
    }

    return <div onClick={ setActiveDay }
                className= {
                    ` day ${ Number( props.value ) > 0 ? 'day' : 'paddingDays' }
                          ${ props.current ? 'currentDay' : null } 
                          ${ props.clickedDay?.value === props.value ? 'active': null }
                    ` }>
        { props.value === null ? null : NormalizeTitle(props.value) }
    </div>;
};


export const DayComponent = memo( DayComponentInner );