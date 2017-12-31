import React, { Component } from "react";
import PropTypes from "prop-types";

class InfoLegend extends Component {
  static propTypes = {
    text: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    color: PropTypes.string.isRequired
  };

  render() {
    const { text, value, color } = this.props;
    return (
      <div className="cr-info-legend">
        {text}
        <div className="cr-info-legend-value" style={{ color }}>{value}</div>
      </div>
    );
  }
}

export default InfoLegend;
