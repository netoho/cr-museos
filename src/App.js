import React, {Component} from 'react';
import styles from './styles'

import Calendar from './Components/Calendar'
import Layout from './Components/Layout'
import CollapsibleSection from './Components/CollapsibleSection'
import TwoLevelPieChart from './Charts/Pie'

import LoginPage from './Pages/Login'
import Direction from './Pages/Direction'

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }

  render() {
    const {
      isLogged
    } = this.state;
    const comp = [
      <CollapsibleSection title="Agenda" open key="chart">
        <TwoLevelPieChart />
      </CollapsibleSection>,
      <CollapsibleSection title="Agenda" open key="agenda">
        <Calendar defaultView='day'/>
      </CollapsibleSection>,
      <CollapsibleSection title="Agenda" open key="tabla">
        <table className="cr-table">
          <thead>
          <tr>
            <th>Área</th>
            <th>Total respondidas</th>
            <th>Total respondidas 2</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1. Dirección</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1. Dirección</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1. Dirección</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1. Dirección</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1. Dirección</td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </CollapsibleSection>
    ];
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"/>
        <link rel="stylesheet" href="//unpkg.com/flexboxgrid2" />
        <Layout>
          {!isLogged ? <Direction /> : <LoginPage onSubmit={e => {
            e.preventDefault();
            this.setState({isLogged: true})
          }}/>}
        </Layout>
        <style jsx global>
          {styles}
        </style>
      </div>
    );
  }
}

export default App;
