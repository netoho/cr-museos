import React, { Component } from "react";
import {
  PieChart as RPieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import PropTypes from "prop-types";

const STATUS_NAMES = {
  UNREAD: "no leídos",
  PENDING: "pendientes",
  DONE: "atendidos"
};

class PieChart extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    series: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        statistics: PropTypes.arrayOf(
          PropTypes.shape({
            number: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired
          })
        ).isRequired
      })
    ).isRequired
  };

  getData = serie => ({
    name: serie.name,
    total: serie.statistics.map(s => s.number).reduce((a, b) => a + b, 0)
  });

  getPercentage = () => {
    const { series } = this.props;
    const done = series
      .map(s =>
        s.statistics
          .filter(st => st.status === "DONE")
          .map(st => st.number)
          .reduce((a, b) => a + b, 0)
      )
      .reduce((a, b) => a + b, 0);
    const all = series
      .map(s => s.statistics.map(st => st.number).reduce((a, b) => a + b, 0))
      .reduce((a, b) => a + b, 0);
    const percentage = `${(done * 100 / all).toFixed(2)} %`;

    return (
      <p className="cr-pie-percentage">
        ATENCIÓN <span>{percentage}</span>
      </p>
    );
  };

  getSeriesInfo = () => {
    const { series } = this.props;
    return series.map((serie, si) => {
      const { color, statistics } = serie;
      const total = statistics.map(st => st.number).reduce((a, b) => a + b, 0);
      const style = { position: 'absolute' };
      if (si < 2) {
        style.top = "5rem";
      } else {
        style.bottom = "1rem";
      }
      if (si % 2 === 0) {
        style.left = "1rem";
      } else {
        style.right = "1rem";
      }
      return (
        <div className="cr-pie-info" key={si} style={style}>
          <header style={{ color }}>
            <p className="cr-pie-serie-name">{serie.name}</p>
            <p className="cr-pie-serie-total">{total}</p>
          </header>
          {statistics.map((st, i) => {
            return (
              <p className="cr-pie-serie-statistic" key={i}>
                <span>{st.number}</span> {STATUS_NAMES[st.status]}
              </p>
            );
          })}
        </div>
      );
    });
  };

  render() {
    const { header, series } = this.props;
    const colors = series.map(s => s.color);
    const data = series.map(this.getData);
    return (
      <div className="cr-pie-chart">
        <header>{header}</header>
        <section className="cr-pie-chart-container">
          {this.getPercentage()}
          {this.getSeriesInfo()}
          <ResponsiveContainer width="100%" height="auto" aspect={4.0 / 4.0}>
            <RPieChart>
              <Tooltip />
              <Pie data={data} fill="white" dataKey="total" label>
                {colors.map((c, i) => <Cell key={i} fill={c} />)}
              </Pie>
            </RPieChart>
          </ResponsiveContainer>
        </section>
      </div>
    );
  }
}

export default PieChart;
