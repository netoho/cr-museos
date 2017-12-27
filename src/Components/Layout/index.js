import React, { Component } from "react";

import NavBar from "./NavBar";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="cr-dashboard">
        <NavBar />
        <TopMenu />
        <div className="content">
          <SideMenu />
          <main>
            {children}
          </main>
        </div>
      </section>
    );
  }
}

export default Layout;
