import React from 'react';
import PropTypes from 'prop-types'

const SploaderGraphics = ({percent, SploaderSvg}) => {
  const strokeDashoffset = 100 - percent
  return (
    <svg ref={SploaderSvg} className='spinit' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
      <circle className='base' cx='100' cy='100' r='90' />
      <circle style={{ strokeDashoffset }} className='blue' cx='100' cy='100' r='90' pathLength="100"/>
    </svg>
  )
}

SploaderGraphics.propTypes = {
  percent: PropTypes.number,
  SploaderSvg: PropTypes.shape({
    current: PropTypes.object
  })
}


export default SploaderGraphics;
