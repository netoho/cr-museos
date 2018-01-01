import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";

import Layout from "../../Components/Layout";
import BarChart from "../../Components/BarChart";
import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../theme/colors";

class AccordsPage extends Component {
  render() {
    return (
      <Layout>
        <section className="cr-indicators-page">
          <Container fluid>
            <Row align="center">
              <Col
                lg={12}
                style={{
                  marginTop: "1rem",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                <table className="cr-table">
                  <thead>
                    <tr>
                      <th />
                      <th>Clasificación problemática</th>
                      <th>Acuerdos enviados</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Con propuestas de solución</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Sin propuesta de solución</td>
                      <td>7</td>
                    </tr>

                    <tr>
                      <td />
                      <td>Total</td>
                      <td>20</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
            <Row>
              <Col
                lg={12}
                style={{
                  marginTop: "1rem",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                <BarChart
                  header="Clasificación"
                  yLabel="Número de acuerdos enviados"
                  series={[
                    {
                      name: "Problemática con solución",
                      value: 13
                    },
                    {
                      name: "Problemática sin solución",
                      value: 7
                    }
                  ]}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    );
  }
}

export default AccordsPage;
