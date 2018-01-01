import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";

import Layout from "../../../Components/Layout";
import Calendar from "../../../Components/Calendar";
import CollapsibleSection from "../../../Components/CollapsibleSection";
import PieChart from "../../../Components/PieChart";
import IndicatorStatistics from "../../../Components/IndicatorStatistics";

import fakeData from "../../Indicatiors/fakePieChartData";

export default class extends Component {
  render() {
    return (
      <Layout>
        <section className="cr-direction-query-page">
          <br />
          <Container fluid>
            <Row>
              <Col md={3}>
                <CollapsibleSection title="Acuerdos" open>
                  <IndicatorStatistics
                    request={3}
                    suggestion={20}
                    awareness={10}
                    issues={2}
                  />
                </CollapsibleSection>
              </Col>
              <Col md={3}>
                <CollapsibleSection title="Opiniones" open>
                  <IndicatorStatistics
                    request={5}
                    suggestion={16}
                    awareness={9}
                    issues={5}
                  />
                </CollapsibleSection>
              </Col>
              <Col md={6}>
                <CollapsibleSection title="Agenda" open>
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
              </Col>
            </Row>
            <br/>
            <Row>
              <Col md={6}>
                <CollapsibleSection title="Agenda" open>
                  <Calendar defaultView="day" />
                </CollapsibleSection>
              </Col>
              <Col md={6}>
                <PieChart {...fakeData[0]} />
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    );
  }
}
