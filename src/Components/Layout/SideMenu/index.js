import React, { Component } from "react";
import config from "./sideMenuConfiguration";

class TopMenu extends Component {
  render() {
    return (
      <section className="cr-side-menu">
        {config.map((m, i) => (
          <div className="menu-wrapper" key={i}>
            <header>{m.header}</header>
            {m.menus.map((menu, index) => [
              <p className="title" key="title">
                {menu.title}
              </p>,
              <ul className="menu" key="menu">
                {menu.items.map((item, ii) => (
                  <li key={ii}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            ])}
          </div>
        ))}
      </section>
    );
  }
}

export default TopMenu;
