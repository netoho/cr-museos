import React, {Component} from 'react';

export default class extends Component {
  render() {
    const {
      title
    } = this.props.event;
    return (
      <div className="cr-event">
        <p className="cr-event-title">{title}</p>
      </div>
    )
  }
}
