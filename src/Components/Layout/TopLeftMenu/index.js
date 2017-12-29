import React, { Component } from "react";

class TopLeftMenu extends Component {
  render() {
    return (
      <section className="cr-top-left-menu">
        <header>MPBA</header>
        <hr />
        <p className="info">
          <span className="circle">
            <span className="small-circle" />
          </span>{" "}
          345 nuevos acuerdos
        </p>
        <hr />
        <p className="info">12,345 visitantes</p>
        <hr />
        <div className="notifications">
          <p>NOTIFICACIONES</p>
          <p className="notification">Exposición MPBA OCT Nueva edición del Museo de </p>
        </div>
      </section>
    );
  }
}

export default TopLeftMenu;
