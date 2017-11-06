import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Calendar from './Components/Calendar'
import CollapsibleSection from './Components/CollapsibleSection'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <CollapsibleSection title="Acuerdos" open>
          <Calendar defaultView='day'/>
        </CollapsibleSection>
      </div>
    );
  }
}

export default App;
