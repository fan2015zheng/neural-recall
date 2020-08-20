import React from 'react'
import './TestBoard.css'
import Picture from './Picture'

function TestBoard({M, a, newPattern, recallPattern, toggleDot}) {

  return(<>
    <div className="container">
      <div className="row">
        <div className="col">
          In the first region, draw a new image close to one of the above images to see if the human can recall it. Click Recall one or more times to see what the human remembers in the second region.
        </div>
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