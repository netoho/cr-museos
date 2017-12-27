import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="cr-nav-bar">
        <section>
          <p className="logo">SIE</p>
          <p className="name">Sistema de información y evaluación</p>
        </section>
        <section>
          <ul className="menu">
            <li>INICIO</li>
            <li>APLICACIONES</li>
            <li>INDICADORES</li>
            <li>SALIR</li>
          </ul>
          <div className="profile">
            <p>Miguel Fernández</p>
            <div className="img" />
          </div>
        </section>
      </nav>
    );
  }
}

export default NavBar;
