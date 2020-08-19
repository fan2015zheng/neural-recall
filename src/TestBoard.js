import React from 'react'
import './TestBoard.css'
import Picture from './Picture'

function TestBoard({M, a, newPattern, recallPattern, toggleDot}) {

  return(<>
    <div className="container">
      <div className="row">
      In the first region, draw a new image close to one of the above images and click Recall one or more times to see result on the second region.
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 _pictureSpace">
          <Picture M={M} a={a} pattern={newPattern} pictureIndex={-1} toggleDot={toggleDot}/>
        </div>
        <div className="col-sm-6 col-lg-4 _pictureSpace">
          <Picture M={M} a={a} pattern={recallPattern}/>
        </div>
      </div>
   </div>
  </>)
}

export default TestBoard