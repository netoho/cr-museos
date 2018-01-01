import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../../../Components/Layout";

import NewOpinion from "../../../Components/NewOpinion";

class NewOpinionPage extends Component {
  render() {
    return (
      <Layout>
        <section className="cr-new-opinion-page">
          <NewOpinion />
        </section>
      </Layout>
    );
  }
}

export default NewOpinionPage;
