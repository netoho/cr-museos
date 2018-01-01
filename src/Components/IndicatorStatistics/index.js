import React, { Component } from "react";
import PropTypes from "prop-types";

class IndicatorStatistics extends Component {
  static propTypes = {
    request: PropTypes.number.isRequired,
    suggestion: PropTypes.number.isRequired,
    awareness: PropTypes.number.isRequired,
    issues: PropTypes.number.isRequired
  };
  getTotal = () => {
    const { request, suggestion, awareness, issues } = this.props;
    return request + suggestion + awareness + issues;
  };
  render() {
    const { request, suggestion, awareness, issues } = this.props;
    return (
      <section className="cr-info-indicator-statistics">
        <div className="cr-info-indicator-statistics-total">
          <span>{this.getTotal()}</span> recibidos
        </div>
        <div className="cr-info-indicator-statistics-details">
          <table>
            <tbody>
              <tr>
                <td className="cr-info-indicator-statistics-td-right">{request}</td> <td>solicitudes</td>
              </tr>
              <tr>
                <td className="cr-info-indicator-statistics-td-right">{suggestion}</td> <td>sugerencias</td>
              </tr>
              <tr>
                <td className="cr-info-indicator-statistics-td-right">{awareness}</td> <td>conocimiento</td>
              </tr>
              <tr>
                <td className="cr-info-indicator-statistics-td-right">{issues}</td> <td>problemáticas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cr-info-indicator-statistics-overview">
          <p>590 Acuerdos Recibidos 2017</p>
          <p>884 Acuerdos Enviados 2017</p>
        </div>
        <div className="cr-info-indicator-statistics-links" >
          <a>
            Ver todos los  indicadores de acuerdos
          </a>
        </div>
      </section>
    );
  }
}

export default IndicatorStatistics;
