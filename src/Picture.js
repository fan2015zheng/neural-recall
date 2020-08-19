import React from 'react'
import './Picture.css'
import Dot from './Dot'

function Picture({M, a, pattern, pictureIndex, toggleDot}) {
  const pictureStyle = {
    width: `${M*a}px`,
  }
  return(<>
    <div className="_picture" style={pictureStyle}>
      {pattern.map(
        (S, j) => {
          
          return (
            <Dot key={j} width={a} S={S} pictureIndex={pictureIndex} dotIndex={j}
              toggleDot={toggleDot}/>
          )
        }
      )}
    </div>
  </>)
}

export default Picture