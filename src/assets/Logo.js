import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg viewBox="0 0 58 58" {...props}>
    <Path fill="#edeada" d="M51.5 14l-14-14h-31v58h45z" />
    <Path
      fill="#cec9ae"
      d="M37.5 0v14h14zM41.5 22h-16a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"
    />
    <Path
      d="M17.5 23a1 1 0 0 1-.708-.293l-2-2a.999.999 0 1 1 1.414-1.414l1.367 1.367 4.301-3.441a1 1 0 1 1 1.249 1.562l-5 4A.989.989 0 0 1 17.5 23z"
      fill="#14a085"
    />
    <Path d="M41.5 33h-16a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z" fill="#cec9ae" />
    <Path
      d="M17.5 34a1 1 0 0 1-.708-.293l-2-2a.999.999 0 1 1 1.414-1.414l1.367 1.367 4.301-3.441a1 1 0 1 1 1.249 1.562l-5 4A.989.989 0 0 1 17.5 34z"
      fill="#14a085"
    />
    <Path d="M41.5 44h-16a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z" fill="#cec9ae" />
    <Path
      d="M17.5 45a1 1 0 0 1-.708-.293l-2-2a.999.999 0 1 1 1.414-1.414l1.367 1.367 4.301-3.441a1 1 0 1 1 1.249 1.562l-5 4A.989.989 0 0 1 17.5 45z"
      fill="#14a085"
    />
  </Svg>
)

export default SvgComponent


// https://svg2jsx.herokuapp.com/
// https://www.smooth-code.com/open-source/svgr/playground/