import React, { Component } from "react";
import config from "./topMenuConfiguration";

class TopMenu extends Component {
  render() {
    return (
      <section className="cr-top-menu">
        {config.map((m, i) => (
          <div className="menu" key={i}>
            <header>{m.header}</header>
            <ul>
              {m.menus.map((menu, index) => (
                <li key={index}>
                  <a>{menu}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
}

export default TopMenu;
