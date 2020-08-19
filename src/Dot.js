import React from 'react'
import './Dot.css'

function Dot({width, S, pictureIndex, dotIndex, toggleDot}) {
  let background = S===1 ? '#122': '#FAE5D3'

  const dotStyle = {
    width: width,
    height: width,
    boxSizing: 'border-box',
    background: background
  }

  return(<>
    <div style={dotStyle} onClick={() => {
      if (pictureIndex === undefined || pictureIndex === null) {
        return
      }
      toggleDot(pictureIndex, dotIndex)
    }}>

    </div>
  </>)
}

export default Dot