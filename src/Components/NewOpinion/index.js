import React, { Component } from "react";

import config from "./formConfig";

class NewOpinion extends Component {
  getCcp = () => {
    const { ccp } = config;
    return ccp.map((c, i) => (
      <td key={i} className="cr-new-opinion-ccp-td">
        <section className="cr-new-opinion-ccp">
          <header>{c.name}</header>
          {c.items.map((item, ii) => {
            return (
              <label htmlFor={`cpp-${item.replace(/ /g, "")}`} key={ii}>
                <input
                  id={`cpp-${item.replace(/ /g, "")}`}
                  type="checkbox"
                  name="ccp"
                  value={item}
                />{" "}
                {item}
              </label>
            );
          })}
        </section>
      </td>
    ));
  };
  render() {
    return (
      <table className="cr-table cr-new-opinion">
        <thead>
          <tr>
            <th className="cr-new-opinion-header">
              <header>Tipo</header>
            </th>
            <th className="cr-new-opinion-types" colSpan={4}>
              <label htmlFor="type-congratulation">
                <input
                  id="type-congratulation"
                  type="radio"
                  name="type"
                  value="Felicitación"
                />{" "}
                Felicitación
              </label>
              <label htmlFor="type-petition">
                <input
                  id="type-petition"
                  type="radio"
                  name="type"
                  value="Petición"
                />{" "}
                Petición
              </label>
              <label htmlFor="type-suggest">
                <input
                  id="type-suggest"
                  type="radio"
                  name="type"
                  value="Sugerencia"
                />{" "}
                Sugerencia
              </label>
              <label htmlFor="type-complain">
                <input
                  id="type-complain"
                  type="radio"
                  name="type"
                  value="Queja"
                />{" "}
                Queja
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cr-new-opinion-header">
              <header>Opinión</header>
            </td>
            <td colSpan={4}>
              <div className="cr-new-opinion-content">
                <p>
                  Agradezco mucho que me envien información de las exposiciones
                  del Museo del Palacio de Bellas Artes, me encantaria asistir a
                  todas pero mi lugar de residencia es la bella ciudad de
                  Querétaro, que también nos ofrece mucho arte, feliciitaciones
                  por su labor de informar cuando tengo la oportunidad de ir al
                  centro de la ciudad siempre paso a B. Artes.
                </p>
                <p>30/10/17 (Hace 5 dias)</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="cr-new-opinion-header">
              <header>Enviar</header>
            </td>
            <td className="cr-new-opinion-send-to" colSpan={4}>
              <label htmlFor="to-axis">
                <input
                  id="to-axis"
                  type="radio"
                  name="type"
                  value="Felicitación"
                />{" "}
                Opinión a eje
              </label>
              <label htmlFor="to-area">
                <input
                  id="to-area"
                  type="radio"
                  name="type"
                  value="Petición"
                />{" "}
                Opinión a área
              </label>
            </td>
          </tr>
          <tr>
            <td className="cr-new-opinion-header">
              <header>CCP: </header>
            </td>
            {this.getCcp()}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default NewOpinion;
