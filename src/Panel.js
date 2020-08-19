import React from 'react'
import './Panel.css'
import Picture from './Picture'

function Panel({M, PictureCount, a, patterns, toggleDot, copyPicture}) {



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
                <span className="_useBtn btn btn-sm btn-light" onClick={() => {copyPicture(i)}}>use</span>
              </div>
            </div>
          )
        })}
      </div>
   </div>
  </>)
}

export default Panel