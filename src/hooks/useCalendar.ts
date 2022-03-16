import  React from 'react';

export interface ICalendarDay {
    value: number | null,
    current: boolean,
    padding: boolean,
    active: boolean,
    date: string,
    events: any[],
}

export const useCalendar = () => {

    const weekDays: string[] = [ 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс' ];
    const [ nav, setNav ] = React.useState<number>(0);
    const [ calendar, setCalendar ] = React.useState<ICalendarDay[]>( [] );
    const [ currentMonth, setCurrentMonth] = React.useState<string>('');
    const [ currentYear, setCurrentYear] = React.useState<string>('');

    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();

    const separateDisplayDate = ( date: string) => {
        setCurrentMonth( date.split(' ')[0] );
        setCurrentYear( date.split(' ')[1] );
    }

    React.useEffect(() => {

        const calendar: ICalendarDay[] = [];

        const date = new Date();

        if (nav !== 0) {
            date.setMonth(new Date().getMonth() + nav);
        }

        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayInMonth = new Date(year, month, 1);

        const dateString = firstDayInMonth.toLocaleDateString('ru-RU', {
            weekday: 'short',
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
        });

        const paddingDays = weekDays.indexOf(dateString.split(', ')[0]);

        for (let index = 1; index <= daysInMonth + paddingDays; index++) {
            const currentDate = date.toLocaleDateString('en-us', {
                month: 'long',
                year: 'numeric',
            });

            separateDisplayDate(currentDate);

            if (index > paddingDays) {
                calendar.push({
                    value: index - paddingDays,
                    current: index - paddingDays === day && nav === 0,
                    padding: false,
                    active: false,
                    date: new Date(year, month, index - 1).toLocaleDateString('ru-RU'),
                    events: [],
                });
            } else {
                calendar.push({
                    value: null,
                    current: false,
                    padding: true,
                    active: false,
                    date: new Date(year, month, index).toLocaleDateString('ru-RU'),
                    events: [],
                });
            }
        }

        setCalendar( calendar );

    }, [ nav ])

    return {
        weekDays,
        setNav,
        calendar,
        currentMonth,
        currentYear,
        nav,
        currentHour,
        currentMinutes
    }

}