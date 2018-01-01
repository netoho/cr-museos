import React, { Component } from "react";

import NavBar from "./NavBar";
import TopMenu from "./TopMenu";
import TopLeftMenu from "./TopLeftMenu";
import SideMenu from "./SideMenu";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="cr-dashboard">
        <NavBar />
        <div className="top-content">
          <TopLeftMenu />
          <TopMenu />
        </div>
        <div className="content">
          <SideMenu />
          <main style={{ padding: '0  0 15px 0', backgroundColor: 'white' }}>
            {children}
          </main>
        </div>
      </section>
    );
  }
}

export default Layout;
