import React, { Component } from "react";
import Calendar from '../../../Components/Calendar'

import CollapsibleSection from '../../../Components/CollapsibleSection'
import TwoLevelPieChart from '../../../Charts/Pie'


export default class extends Component {
  render() {
    return (
      <section className="cr-direction-query-page">
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
      </section>
    );
  }
}
