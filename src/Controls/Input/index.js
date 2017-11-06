import React, {Component} from 'react';
import cn from 'classnames';

export default class extends Component {

  render() {
    const {
      className,
      ...rest
    } = this.props;
    return (
      <input
        className={cn(className, 'cr-input')}
        {...rest}
      />
    )
  }
}