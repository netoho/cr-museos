import React, { Component } from "react";

import NavBar from "./NavBar";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="cr-dashboard">
        <NavBar />
        {children}
      </section>
    );
  }
}

export default Layout;
