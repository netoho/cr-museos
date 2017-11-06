import React, { Component } from 'react';
import styles from './styles'

import Calendar from './Components/Calendar'
import CollapsibleSection from './Components/CollapsibleSection'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">
          Encabezado
        </h1>
        <CollapsibleSection title="Acuerdos" open>
          <Calendar defaultView='day'/>
        </CollapsibleSection>
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}

export default App;
