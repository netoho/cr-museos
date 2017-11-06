import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import title1 from "./styles";

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
        <span className="close">-</span>
      </h3>
    );
    return (
      <Collapsible trigger={titleComponent} {...rest}>
        {children}
      </Collapsible>
    );
  }
}