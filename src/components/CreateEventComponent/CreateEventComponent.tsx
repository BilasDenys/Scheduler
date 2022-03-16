import React, {memo, useState} from 'react';
import {IProps} from "./Props";
import "./CreateEventComponent.scss";
import {ButtonComponent} from "../../re-usable-components";
import {useCalendar} from "../../hooks";
import {NormalizeTitle} from "../../utils/NormalizeTitle";
import {useCalculateFinishEvent} from "../../hooks/useCalculateFinishEvent";

const CreateEventComponentInner: React.FC<IProps> = ({ setShowModal, setEvent, selectedDay }) => {
    const { currentHour, currentMinutes } = useCalendar();
    const [ startHour, setStartHour ] = React.useState<number>( currentHour );
    const [ startMinutes, setStartMinutes ] = React.useState<number>( currentMinutes );
    const [ duration, setDuration ] = React.useState<number>( 30 );
    const [ typeTraining, setTypeTraining ] = React.useState( 'training' );
    const [ description, setDescription ] = useState<string>('');

    const { hours, minutes, finishEvent, calculateFinalResult } = useCalculateFinishEvent( startHour, startMinutes, duration );

    React.useEffect(() => {

       calculateFinalResult( startHour, startMinutes, duration );

    }, [ startHour, startMinutes, duration ]);

    const addEvent = () => {

        const newItem = {
            start: `${ NormalizeTitle(startHour) }:${ NormalizeTitle(startMinutes)}`,
            end: finishEvent,
            duration,
            description,
            date: selectedDay?.date,
            author: 'Bil Den',
            phone: '+380203040509',
            training: typeTraining
        }

        setEvent((prevState: any) => [...prevState, newItem])

        setShowModal(false)
    }

    const handleChange = React.useCallback(( event: any ) => {
        const {target} = event;
        switch (target.name) {
            case 'hour':
                setStartHour(target.value);
                break;
            case 'minutes':
                setStartMinutes(target.value);
                break;
            case 'duration':
                setDuration(target.value);
                break;
            case 'type':
                setTypeTraining(target.value);
                break;
            case 'description':
                setDescription(target.value)
                break;
            default:
                break;
        }
    }, [startHour, startMinutes, duration, typeTraining])

    const showModalHandler = React.useCallback(() => {
        setShowModal( false );
    }, [setShowModal]);

    return (
        <section className='create-event'>

           <header className="create-event__header">
               <section className="create-event__title">
                   Create Event
               </section>

               <section className="create-event__date">
                   { selectedDay?.date }
               </section>

               <section className="create-event__actions">
                   <ButtonComponent buttonSize='medium' value='Close' setShowModal={ showModalHandler }/>
               </section>
           </header>

            <main className="create-event__body">

                <section className="create-event__training">
                    <label className="create-event__label" htmlFor='event'>
                        Training Type:
                    </label>
                    <select name="type" onChange={ handleChange }>
                        <option value="training">Training</option>
                        <option value="tournament">Tournament</option>
                    </select>
                </section>

                <section className="create-event__time">

                    <section className="create-event__time-block">

                        <label className="create-event__label" htmlFor='event'>
                            Start Event:
                        </label>

                        <select className='create-event__hour' name='hour' onChange={ handleChange }>
                            { hours.map( hour => {
                                    return (
                                        hour.title >= currentHour ?
                                            <option
                                                key={ hour.title }
                                                value={ hour.value }
                                            >{ NormalizeTitle( hour.title ) }</option>
                                            :
                                            null
                                    );
                                })
                            }
                        </select>

                        <section className='create-event__separator'>
                            :
                        </section>

                        <select className='create-event__minutes' name='minutes' onChange={ handleChange }>

                            { startHour === currentHour ?
                                    minutes.map( minute => {
                                        return (
                                            +minute.title >= startMinutes
                                                ?
                                                  <option
                                                    key={ minute.title }
                                                    value={ minute.value }
                                                  >{ NormalizeTitle( minute.title ) }</option>
                                                :
                                                  null
                                        )
                                    })
                                    :
                                    minutes.map( minute => {
                                        return (
                                            <option
                                                key={ minute.title }
                                                value={ minute.value }
                                            >{ NormalizeTitle( minute.title ) }</option>
                                        )
                                    })
                            }

                        </select>

                    </section>

                    <section className="create-event__interval">

                        <label className="create-event__label" htmlFor='event'>
                            Duration:
                        </label>

                        <select className='create-event__duration' name='duration' onChange={ handleChange }>
                            <option value='30'>30min</option>
                            <option value='45'>45min</option>
                            <option value='60'>1h</option>
                            <option value='75'>1h15min</option>
                            <option value='90'>1h30min</option>
                            <option value='105'>1h45min</option>
                            <option value='120'>2h</option>
                            <option value='135'>2h15min</option>
                            <option value='150'>2h30min</option>
                            <option value='165'>2h45min</option>
                            <option value='180'>3h</option>
                        </select>

                    </section>

                </section>
                <section className="create-event__description">
                    <label className="create-event__label" htmlFor='event'>
                        Description:
                    </label>

                    <input type="text" name='description' onChange={handleChange} value={description}/>
                </section>
            </main>

            <footer className="create-event__footer">
                <section>Result: { finishEvent }</section>

                <section className="create-event__actions">
                    <ButtonComponent buttonSize='large' value='Create Event' setShowModal={ addEvent }/>
                </section>

            </footer>

        </section>
    );
};

 const CreateEventComponent = memo( CreateEventComponentInner );

 export  { CreateEventComponent}
