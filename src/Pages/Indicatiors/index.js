import React, { Component } from "react";

import InfoLegend from "../../Components/InfoLegend";
import PieChart from "../../Components/PieChart";

import {
  colors,
  styleGuideColors,
  shadeBlendConvert
} from "../../theme/colors";

import fakeData from './fakePieChartData'

export default class extends Component {
  render() {
    return (
      <section className="cr-indicators-page">
        <div className="cr-row">
          <InfoLegend text="TOTAL GENERAL" value="7,156" color={styleGuideColors.slateGreyTwo} />
          <InfoLegend text="PORCENTAJE DE ATENCIÓN GENERAL" value="81.61%" color={styleGuideColors.emeraldGreen} />
          <InfoLegend text="AÑO" value="2017" color={styleGuideColors.slateGreyTwo} />
        </div>
        <div className="cr-row">
          {fakeData.map((fd, i) => <PieChart {...fd} key={i} />)}
        </div>
      </section>
    );
  }
}
