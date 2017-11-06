import React, { Component } from 'react';
import styles from './styles'

import Calendar from './Components/Calendar'
import CollapsibleSection from './Components/CollapsibleSection'
import LoginPage from './Pages/Login'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}

export default App;
