import React, { Component } from "react";

import Layout from "../../Components/Layout";
import SimpleSelect from "../../Controls/SimpleSelect";

import config from './directionConfig'

export default class extends Component {
  render() {
    return (
      <Layout>
        <section className="cr-direction-page">
          <h2>Indicadores de Dirección.</h2>
          {config.map(({placeholder, options}, i) => <SimpleSelect placeholder={placeholder} options={options} />)}
        </section>
      </Layout>
    );
  }
}
