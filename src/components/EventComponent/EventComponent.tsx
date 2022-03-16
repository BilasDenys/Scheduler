import React from 'react';
import { IProps } from "./IProps";
import './EventComponent.scss';

const EventComponent: React.FC<IProps> = ({event}): JSX.Element => {
    return (
        <section className='event'>

            <header className="event__header">
                <section className="event__time">
                    {`${event.start}-${event.end}`}
                    {/*9:00 - 10:00*/}
                </section>

                <section className="event__date">
                    {event.date}
                    {/*3.01.22*/}
                </section>
            </header>

            <main className="event__body">
                <section className="event__type">
                    {/*{event.}*/}
                    {/*Training*/}
                </section>
                <section className="event__description">
                    {event.description}
                    {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, tenetur!*/}
                </section>
            </main>

            <footer className="event__footer">
                <section className="event__author">
                    {event.author}
                    {/*Bil Den*/}
                </section>
                <section className="event__phone">
                    {event.phone}
                    {/*+380502323232*/}
                </section>
            </footer>

        </section>
    );
};

export default EventComponent;