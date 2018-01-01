import React, { Component, PureComponent } from "react";
import {
  BarChart as RBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";

import { styleGuideColors, shadeBlendConvert } from "../../theme/colors";

function renderText(child, x, y, rotate, fill, key) {
  if (child && child.content) {
    return (
      <text
        key={key}
        fontSize='1rem'
        fontWeight={300}
        x={x}
        y={y}
        transform={`rotate(${rotate})`}
        textAnchor="middle"
        fill={fill}
        {...child.props}
      >
        {child.content}
      </text>
    );
  }

  return (
    <text
      key={key}
      fontSize='1rem'
      fontWeight={300}
      x={x}
      y={y}
      transform={`rotate(${rotate})`}
      textAnchor="middle"
      fill={fill}
    >
      {child}
    </text>
  );
}

function AxisLabel({ axisType, x, y, width, height, fill, children }) {
  const isVert = axisType === "yAxis";
  const cx = isVert ? x : x + width / 2;
  const cy = isVert ? height / 2 + y : y + height + 20;
  const rot = isVert ? `270 ${cx} ${cy - 20}` : 0;
  const lineHeight = 20;

  if (children.length > 1 && children.map) {
    return (
      <g>
        {children.map((child, index) =>
          renderText(child, cx, cy + index * lineHeight, rot, fill, index)
        )}
      </g>
    );
  }

  return renderText(children, cx, cy, rot, fill);
}

AxisLabel.propTypes = {
  axisType: PropTypes.oneOf(["yAxis", "xAxis"]),
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  children: PropTypes.any
};

class BarChart extends PureComponent {
  static propTypes = {
    header: PropTypes.string.isRequired,
    yLabel: PropTypes.string,
    series: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      })
    ).isRequired
  };

  render() {
    const { header, series, yLabel } = this.props;
    return (
      <div className="cr-pie-chart">
        <header>{header}</header>
        <section className="cr-pie-chart-container">
          <ResponsiveContainer width="100%" height="auto" aspect={4.0 / 3.0}>
            <RBarChart data={series} margin={{}}>
              <XAxis dataKey="name" />
              <YAxis
                label={({ viewBox }) => (
                  <AxisLabel
                    axisType="yAxis"
                    {...viewBox}
                    fill={styleGuideColors.slateGreyTwo}
                  >
                    {yLabel}
                  </AxisLabel>
                )}
              />
              <CartesianGrid strokeDasharray="1 0" vertical={false} />
              <Tooltip />
              <Bar
                dataKey="value"
                fill={shadeBlendConvert(-0.1, styleGuideColors.emeraldGreen)}
              />
            </RBarChart>
          </ResponsiveContainer>
        </section>
      </div>
    );
  }
}

export default BarChart;
