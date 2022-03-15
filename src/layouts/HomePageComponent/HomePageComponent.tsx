import React from 'react';
import { IProps } from './Props';
import './HomePageComponent.scss';
import {CalendarComponent} from "../../components";
import {useCalendar} from "../../hooks";
import EventComponent from "../../components/EventComponent/EventComponent";

 const HomePageComponent: React.FC<IProps> = (): JSX.Element => {

     const [clickedDay, setClickedDay] = React.useState(0);
     const { currentMonth } = useCalendar();

     const arr = [1,2,3,4,5,6];

  return (
    <section className='home container'>

      <main className="home__body">

          <section className="home__calendar">

             <CalendarComponent parentClickedDay={setClickedDay}/>

          </section>

          <section className="home__events events">
             <header className="events__header">

                 <section className="events__title">
                     Events
                 </section>

                 {/*<section className="events__month">*/}
                 {/*    /!*{ currentMonth }*!/*/}
                 {/*</section>*/}

                 {/*<section className="events__clicked-day">*/}
                 {/*    { clickedDay === 0 ?  null : `${clickedDay }${ currentMonth }` }*/}
                 {/*</section>*/}

             </header>

              <main className="events__body">
                  { arr.map((event, index) => {
                      return (<EventComponent key={index + Math.random() + Math.random() * 10}/> )
                  })}
              </main>
          </section>

      </main>

        {/*<footer className="home__footer">*/}
        {/*    Footer*/}
        {/*</footer>*/}

     </section>
  )
}


export { HomePageComponent }
