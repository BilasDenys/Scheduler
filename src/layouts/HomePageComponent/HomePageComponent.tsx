import React from 'react';
import { IProps } from './Props';
import './HomePageComponent.scss';
import {CalendarComponent} from "../../components";
import EventComponent from "../../components/EventComponent/EventComponent";
import  {CreateEventComponent} from '../../components/index'
import {ButtonComponent, ModalWindowComponent} from "../../re-usable-components";
import {IDay} from "../../types/IDay";

 const HomePageComponent: React.FC<IProps> = (): JSX.Element => {

     const [ clickedDay, setClickedDay ] = React.useState<IDay | null>(null);
     const [ showModal, setShowModal ] = React.useState(false);
     const [ events, setEvents] = React.useState([]);

     // const events = [1,2,3,4,5,6];

     const showModalHandler = React.useCallback((status: boolean): void => {
         setShowModal(status);
     },[showModal])

  return (
    <section className='home container'>

      <main className="home__body">
          <section className="home__calendar">
             <CalendarComponent parentClickedDay={setClickedDay}/>

              <section className="home__actions">
                  {!!clickedDay ?
                      <ButtonComponent
                          buttonSize='large'
                          setShowModal={ showModalHandler.bind(this, true) }
                          value='Create Event'
                      />
                      :
                       null
                  }

              </section>

          </section>

          <section className="home__events events">
             <header className="events__header">
                 <section className="events__title">
                     Events
                 </section>
                 <section className="events__date">
                     {clickedDay ? clickedDay.date : null}
                 </section>
             </header>
              <main className="events__body">
                  { events.map((event, index) => {
                      return (<EventComponent key={index + Math.random() + Math.random() * 10}/> )
                  })}
              </main>
          </section>
      </main>

        <footer className="home__footer">
            <section className="home__modal">
                { showModal ?
                    <ModalWindowComponent  setShowModal={showModalHandler}>
                        <CreateEventComponent
                            setShowModal={showModalHandler}
                            setEvents={setEvents}
                            selectedDay={clickedDay}
                        />
                    </ModalWindowComponent>
                    :
                    null
                }
            </section>
        </footer>



     </section>
  )
}


export { HomePageComponent }
