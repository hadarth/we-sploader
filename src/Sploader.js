import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Sploader.css'
import Button from './Button'
import SploaderGraphics from './SploaderGraphics'



export default class Sploader extends Component {

  constructor(props, context) {
    super(props);
    this.SploaderSvg = React.createRef();
  }


  start = () => this.SploaderSvg.current.style.animationPlayState = ""

  stop = () => this.SploaderSvg.current.style.animationPlayState = "paused"

  render() {
    const { percent } = this.props
    return (
      <div className="container">
        <div className="sploader_container">
          <div className="svg_container">
            <SploaderGraphics percent={percent} SploaderSvg={this.SploaderSvg} />
          </div>
          <div className="loading_value">
            { percent }
            <span className="percent">%</span>
          </div>
        </div>
        <div className="buttons">
          <Button text='start spinning' onClick={this.start}/>
          <Button text='stop spinning' onClick={this.stop}/>
        </div>
      </div>
    );
  }
}

Sploader.propTypes = {
  percent: PropTypes.number
}

Sploader.defaultProps = {
  percent: 15
};