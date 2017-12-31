import React, {Component} from 'react';
import styles from './styles'

import Layout from './Components/Layout'
import Routes from './Routes'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends Component {

  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"/>
        <Layout>
          {Routes}
        </Layout>
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}

export default App;
