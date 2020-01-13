import React, { Component } from 'react';
import shallowEqual from 'shallowequal';
import * as d3 from 'd3';

class Pie extends Component {
  arcGenerator = null;
  fillPath = null;
  componentDidMount() {
    this.renderChart();
  }

  shouldComponentUpdate(nextProps) {
    const isUpdate = !shallowEqual(this.props, nextProps);
    return isUpdate;
  }

  componentDidUpdate(nextProps) {
    const isUpdata = !shallowEqual(this.props, nextProps);
    isUpdata && this.updateRender();
  }

  updateRender = () => {
    const _this = this;
    const { percent } = this.props;
    this.fillPath
      .transition()
      .duration(750)
      .attrTween('d', function(d) {
        const compute = d3.interpolate(
          d.endAngle,
          (percent / 100) * Math.PI * 2
        );
        return function(t) {
          d.endAngle = compute(t);
          const data = (d.endAngle / Math.PI / 2) * 100;
          // 设置数值
          d3.select('text').text(`${data.toFixed(0)}%`);
          // 将新参数传入，生成新的圆弧构造器
          return _this.arcGenerator(d);
        };
      });
  };

  renderChart = () => {
    const { percent, width, height, bgColor, fillColor } = this.props;
    this.arcGenerator = d3
      .arc()
      .innerRadius(0)
      .outerRadius(width / 2)
      .startAngle(0);

    const svg = d3
      .select(this.pieSvgRef)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);
    svg
      .append('path')
      .datum({ endAngle: 2 * Math.PI })
      .style('fill', bgColor)
      .attr('d', this.arcGenerator);

    this.fillPath = svg
      .append('path')
      .datum({ endAngle: (percent / 100) * 2 * Math.PI })
      .style('fill', fillColor)
      .attr('d', this.arcGenerator);

    // 添加仪表盘显示数值的单位
    // svg
    //   .append('text')
    //   .attr('class', 'gauge-unity')
    //   .style('alignment-baseline', 'central') // 相对父元素对齐方式
    //   .style('text-anchor', 'middle') // 文本锚点，居中
    //   .attr('y', 40) // 到中心的距离
    //   .text(`${percent}%`);
  };

  render() {
    const { width, height, percent, fillColor } = this.props;
    return (
      <div className="el-progress">
        <svg
          ref={node => {
            this.pieSvgRef = node;
          }}
          width={width}
          height={height}
        />
        <div className="el-progress__inner">
          已完成 <span style={{ color: fillColor }}>{percent}%</span>
        </div>
      </div>
    );
  }
}

Pie.defaultProps = {
  width: 120,
  height: 120,
  percent: 0,
  bgColor: '#e9f2fd',
  fillColor: '#4393f8'
};

export default Pie;
