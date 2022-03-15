import React from 'react';
import { IProps } from './Props';
import './HomePageComponent.scss';

 const HomePageComponent: React.FC<IProps> = () => {
  return (
    <section className='home container'>

      <main className="home__body">

          <section className="home__calendar">
              Calendar
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
