import React from 'react';
import './App.scss';
import {HomePageComponent} from "./layouts";

function App() {
  return (

    <section className="app">
      <main className="app__body">
          <HomePageComponent />
      </main>
    </section>

  );
}

export default App;
