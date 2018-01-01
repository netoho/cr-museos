import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

class Link extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  };

  render() {
    const { href, children } = this.props;
    return <RouterLink to={href} className="cr-link">{children}</RouterLink>;
  }
}

export default Link;
