import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";

import NewOpinion from '../../../Components/NewOpinion'

class NewOpinionPage extends Component {
  render() {
    return (
      <section className="cr-new-opinion-page">
        <NewOpinion />
      </section>
    );
  }
}

export default NewOpinionPage;
