import React, { Component } from 'react';

export default class Sploader extends Component {

  constructor(props, context) {
    super(props);
    this.SploaderSvg = React.createRef();
  }

  renderSploader(percent) {
    const strokeDashoffset = 100 - percent
    return (
      <svg ref={this.SploaderSvg} className='spinit' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
        <circle className='base' cx='100' cy='100' r='90' />
        <circle style={{ strokeDashoffset }} className='blue' cx='100' cy='100' r='90' pathLength="100"/>
      </svg>
    )
  }

  start() {
    this.SploaderSvg.current.style.animationPlayState = ""
  }

  stop() {
    this.SploaderSvg.current.style.animationPlayState = "paused"
  }

  render() {
    return (
      <div className="container">
        <div className="sploader_container">
          <div className="svg_container">
            { this.renderSploader(this.props.percent) }
          </div>
          <div className="loading_value">
            { this.props.percent }
            <span className="percent">%</span>
          </div>
        </div>
        <div className="buttons">
          <div className="start" onClick={() => this.start()}>start spinning</div>
          <div className="stop" onClick={() => this.stop()}>stop spinning</div>
        </div>
      </div>
    );
  }
}