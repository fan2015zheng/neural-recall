import React from 'react'
import './Panel.css'
import Picture from './Picture'

function Panel({M, PictureCount, a, patterns, toggleDot, copyPicture, 
  newPattern, recallPattern}) {

  return(<>
   <div className="container">
      <div className="row">
  <div className="col">Please draw in following {PictureCount} rectangular regions and click Memorize to mimic human memorizing the images.</div>
      </div>
      <div className="row">
        {patterns.map((pattern, i) => {
 
          return (
            <div key={i} 
              className="col-sm-6 col-lg-4 _pictureSpace">
              <Picture M={M} a={a} pattern={pattern} pictureIndex={i} toggleDot={toggleDot}/>
              <div className="text-center">
                <span className="_useBtn btn btn-sm btn-light" onClick={() => {copyPicture(i)}}>use</span><br/>
                <span>match: ({match(pattern, newPattern)} , {match(pattern, recallPattern)})</span>
              </div>
              
            </div>
          )
        })}
      </div>
   </div>
  </>)
}

export default Panel

function match(patternA, patternB) {
  const n = patternA.length
  if (n !== patternB.length) {
    return -1
  }
  let c = 0
  for(let i=0; i<n; i++) {
    if(patternA[i] === patternB[i]) {
      c++
    }
  }
  return Math.floor(c/n*100)+"%"
}