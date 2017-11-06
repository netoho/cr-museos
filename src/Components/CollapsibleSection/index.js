import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import {title as titleStyles} from "./styles";

export default class extends Component {
  render() {
    const {
      children,
      title,
      ...rest
    } = this.props;
    const titleComponent = (
      <h3 className="title">
        {title}
        <style jsx>{titleStyles}</style>
      </h3>
    );
    return (
      <Collapsible trigger={titleComponent} {...rest}>
        {children}
      </Collapsible>
    );
  }
}