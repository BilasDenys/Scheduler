import React from 'react';
import { IProps } from "./Props";
import {useCalendar} from "../../hooks";
import './CalendarComponent.scss';
import { CapitalLater } from "../../utils/CapitalLetters";
import {DayComponent} from "../DayComponent/DayComponent";
import {ButtonComponent} from "../../re-usable-components";
import {IDay} from "../../types/IDay";

const CalendarComponent: React.FC<IProps> = ({ parentClickedDay }): JSX.Element => {

    const { weekDays, calendar, currentMonth, currentYear, setNav, nav} = useCalendar();
    const [clickedDay, setClickedDay] = React.useState<IDay | null>(null);

    React.useEffect(() => {
        console.log(nav)
        parentClickedDay(clickedDay);
    }, [clickedDay]);

    const changeMonth = ( step: number ) => {

        setNav(prevState => prevState + step );
    }

    return (
        <section className='calendar'>
            <header className="calendar__header header">

                <header className="calendar__date-block flex">
                    <section className='calendar__date'>
                        <section className="calendar__month ">
                            { currentMonth }'
                        </section>

                        <section className="calendar__year">
                            { currentYear }
                        </section>
                    </section>
                    <section className="calendar__actions">

                        <ButtonComponent
                            buttonSize='medium'
                            value='<'
                            setShowModal={ changeMonth.bind(this, -1) }
                        />
                        <ButtonComponent
                            buttonSize='medium'
                            value='>'
                            setShowModal={ changeMonth.bind(this, 1) }
                        />

                    </section>
                </header>
                <section className="calendar__week-days flex">
                        { weekDays.map(weekDay => {
                            return (
                                <section  className='calendar__week-day' key={ weekDay }>{ CapitalLater(weekDay) }</section>
                                )
                            })
                        }
                </section>
            </header>

            <main className="calendar__body body">
                    <section className="calendar__calendar-days flex">
                        { calendar.map(( item, index ) => (
                            <DayComponent
                                key={ index } { ...item }
                                setClickedDay={ setClickedDay }
                                clickedDay={ clickedDay }
                            />
                        ))}
                    </section>
            </main>
        </section>
    );
};

export { CalendarComponent };