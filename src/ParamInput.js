import React from 'react'
import './ParamInput.css'

function ParamInput({M,N,a,PictureCount,setM,setN,setA,setPictureCount}) {
  return(<>
    <div className="_paramGroup">
      <input value={PictureCount} className="_param form-control form-control-sm"
      type="text" placeholder="Num"
      onChange={(e)=> { setPictureCount(e.target.value)}}
      />

      <input value={M} className="_param form-control form-control-sm"
      type="text" placeholder="X-grid"
      onChange={(e)=> { setM(e.target.value)}}
      />

      <input value={N} className="_param form-control form-control-sm"
      type="text" placeholder="Y-grid"
      onChange={(e)=> { setN(e.target.value)}}
      />

      <input value={a} className="_param form-control form-control-sm" 
      type="text" placeholder="Grid px"
      onChange={(e)=> { setA(e.target.value)}}
      />
    </div>

  </>)
}

export default ParamInput