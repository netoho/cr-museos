import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";

import InfoLegend from "../../Components/InfoLegend";
import PieChart from "../../Components/PieChart";
import Layout from "../../Components/Layout";
import Link from "../../Controls/Link";

import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../theme/colors";

import fakeData, { linksData } from "./fakePieChartData";

export default class extends Component {
  render() {
    return (
      <Layout>
        <section className="cr-indicators-page">
          <Container fluid>
            <Row align="center">
              <Col
                lg={3}
                style={{
                  marginTop: "1rem",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                <InfoLegend
                  text="TOTAL GENERAL"
                  value="7,156"
                  color={styleGuideColors.slateGreyTwo}
                />
              </Col>
              <Col
                lg={6}
                style={{
                  marginTop: "1rem",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                <InfoLegend
                  text="PORCENTAJE DE ATENCIÓN GENERAL"
                  value="81.61%"
                  color={styleGuideColors.emeraldGreen}
                />
              </Col>
              <Col
                lg={3}
                style={{
                  marginTop: "1rem",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                <InfoLegend
                  text="AÑO"
                  value="2017"
                  color={styleGuideColors.slateGreyTwo}
                />
              </Col>
            </Row>

            <Row>
              {fakeData.map((fd, i) => (
                <Col
                  lg={6}
                  style={{
                    marginTop: "1rem",
                    justifyContent: "center",
                    display: "flex"
                  }}
                  key={i}
                >
                  <PieChart {...fd} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col
                className="cr-row"
                lg={12}
              >
                {linksData.map(({ href, children }, i) => (
                  <Link href={href} key={i}>
                    {children}
                  </Link>
                ))}
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    );
  }
}
