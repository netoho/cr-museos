import React, { Component } from "react";
import PropTypes from "prop-types";

import NavBar from "./NavBar";
import TopMenu from "./TopMenu";
import TopLeftMenu from "./TopLeftMenu";
import SideMenu from "./SideMenu";

class Layout extends Component {
  static propTypes = {
    hideMenu: PropTypes.bool
  };

  static defaultProps = {
    hideMenu: false
  };

  render() {
    const { children, hideMenu } = this.props;
    return (
      <section className="cr-dashboard">
        {!hideMenu && <NavBar />}
        {!hideMenu && (
          <div className="top-content">
            <TopLeftMenu />
            <TopMenu />
          </div>
        )}

        <div className="content">
          {!hideMenu && <SideMenu />}
          <main style={{ padding: "0  0 15px 0", backgroundColor: "white" }}>
            {children}
          </main>
        </div>
      </section>
    );
  }
}

export default Layout;
