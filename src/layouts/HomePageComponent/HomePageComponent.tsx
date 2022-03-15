import React from 'react';
import { IProps } from './Props';
import './HomePageComponent.scss';
import {CalendarComponent} from "../../components";

 const HomePageComponent: React.FC<IProps> = () => {

  return (
    <section className='home container'>

      <main className="home__body">

          <section className="home__calendar">

             <CalendarComponent/>

          </section>

          <section className="home__events">
              Events
          </section>

      </main>

        <footer className="home__footer">
            Footer
        </footer>

     </section>
  )
}


export { HomePageComponent }
