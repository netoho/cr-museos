import React, { Component } from "react";
import cn from "classnames";

import { styleGuideColors } from "../../theme/colors";

class SimpleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      hover: false
    };
  }

  selectOption = selected => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(selected);
    }
    this.setState({ selected });
  };

  mouseEnter = () => this.setState({ hover: true });

  mouseLeave = () => this.setState({ hover: false });

  getOptionComp = () => {
    const { options } = this.props;
    return options.map((o, i) => (
      <div
        className="cr-simple-select-option"
        onClick={this.selectOption}
        key={i}
      >
        {o.label}
      </div>
    ));
  };

  render() {
    const { selected, hover } = this.state;
    const { placeholder } = this.props;
    const selectedComp = selected ? selected.value : placeholder;
    const hoverStyle = hover
      ? { backgroundColor: styleGuideColors.indianRed }
      : {};
    return (
      <div
        className="cr-simple-select"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div
          className="cr-simple-select-option cr-simple-selected"
          onClick={this.selectOption}
          style={hoverStyle}
        >
          {selectedComp}
        </div>
        <div
          className={cn("cr-simple-select-options", {
            "cr-simple-select-show": hover
          })}
        >
          {this.getOptionComp()}
        </div>
      </div>
    );
  }
}

export default SimpleSelect;
