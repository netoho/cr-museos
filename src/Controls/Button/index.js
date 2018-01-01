import React, {Component} from 'react';
import cn from 'classnames';

class Button extends Component {

  render() {
    const {
      className,
      color,
      ...rest
    } = this.props;
    return (
      <button
        className={cn(className, color, 'cr-button')}
        {...rest}
      />
    )
  }
}

export default Button;
