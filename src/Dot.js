import React from 'react'
import './Dot.css'

function Dot({a, S, pictureIndex, dotIndex, toggleDot}) {
  let background = S===1 ? '#122': '#FAE5D3'

  const dotStyle = {
    height: `${a}px`,
    width: `${a}px`,
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