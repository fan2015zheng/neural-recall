import React, {useState} from 'react';
import './App.css';
import Panel from './Panel'
import TestBoard from './TestBoard'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const M = 20
const N = 20
const a = 10
const PictureCount = 3

toast.configure()

function App() {
  const [patterns, setPatterns] = useState(() => emptyPatterns(PictureCount))
  const [synapses, setSynapses] = useState(() => null)
  const [newPattern, setNewPattern] = useState(() => emptyPattern())
  const [recallPattern, setRecallPattern] = useState(() => emptyPattern())
  const [startRecall, setStartRecall] = useState(false)
  const [x, setX] = useState(1)

  function copyPicture(pictureIndex) {
    const pattern  = copyPattern(patterns[pictureIndex])
    setNewPattern(pattern)
    clearRecall()
  }

  function toggleDotInPictures(pictureIndex,dotIndex) {
    const pattern  = patterns[pictureIndex]
    const S = pattern[dotIndex]
    pattern[dotIndex] = -S

    setPatterns(patterns)
    setSynapses(null)
  }

  function toggleDotInNewPicture(dotIndex) {
    const S = newPattern[dotIndex]
    newPattern[dotIndex] = -S
    setNewPattern(newPattern)
    clearRecall()
  } 

  function toggleDot(pictureIndex, dotIndex) {
    clearRecall()
    setStartRecall(false)
    setX((x+1)%10)
    if(pictureIndex === -1) {
      toggleDotInNewPicture(dotIndex)
    } else if (pictureIndex >=0) {
      toggleDotInPictures(pictureIndex, dotIndex)
    }
  }

  function randomDraw() {
    let randomPatterns = []
    for(let i=0; i<PictureCount; i++) {
      randomPatterns.push(randomGeneratePattern())
    }
    setSynapses(null)
    setPatterns(randomPatterns)
  }

  function memorize() {
    const k = M*N
    const w = []
    for(let i=0; i<k; i++) {
      w.push([])
      for(let j=0; j<k; j++) {
        w[i].push(0)
        for(let p=0; p<patterns.length; p++) {
          const pattern = patterns[p]
          const ci = pattern[i]
          const cj = pattern[j]
          w[i][j] = w[i][j] + ci*cj
        }
      }
    }
    setSynapses(w)
    toast('Memorized it.', 
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1500
      })
   
  }

  function recall() {
    if (!synapses) {
      alert("Please memorize first")
      return
    }
    let recallPatternCopy = copyPattern(recallPattern)
 
    if (!startRecall) {
      recallPatternCopy = copyPattern(newPattern)
      setStartRecall(true)
    }

    const k = M*N
    let pattern = []
    for(let i=0; i<k; i++) {
      let inputi = 0
      for(let j=0; j<k; j++) {
        inputi += synapses[i][j]*recallPatternCopy[j]
      }
      const S = inputi>0 ? 1 : -1
      pattern.push(S)
    }
    setRecallPattern(pattern)
  }

  function clearRecall() {
    let pattern = emptyPattern()
    setRecallPattern(pattern)
    setStartRecall(false)
  }

  return (<>
    <div className="text-center p-1 m-2">
      <span className="_title">Neural Recall</span>
    </div>
    <Panel M={M} PictureCount={PictureCount} a={a} patterns={patterns}
     toggleDot={toggleDot} copyPicture={copyPicture}/>

    <div className="_buttonBar">
      <div onClick={() => {randomDraw()}}
          className="btn btn-info m-2 _btn"
      >Random Draw</div>

      <div onClick={() => {memorize()}}
        className="btn btn-success m-2 _btn"
      >Memorize</div>
    </div>
    <TestBoard M={M} N={N} a={a} newPattern={newPattern}
     recallPattern={recallPattern} toggleDot={toggleDot}/>
    
    <div className="_buttonBar">
      <div onClick={() => {recall()}}
        className="btn btn-warning m-2 _btn"
      >Recall</div>
      <div onClick={() => {clearRecall()}}
        className="btn btn-dark m-2 _btn"
      >Clear Recall</div>
    </div>
  </>);
}

export default App;

function randomGeneratePattern() {  
  const pattern = []
  for(let i=0; i<M*N; i++) {
    const S = Math.random() > 0.5 ? 1 : -1
    pattern.push(S)
  }
  return pattern
}
function copyPattern(pattern) {
  const copy = []
  for(let i=0; i<pattern.length; i++) {
    copy.push(pattern[i])
  }
  return copy
}
function emptyPattern() {
  const pattern = []
  for(let i=0; i<M*N; i++) {
    pattern.push(-1)
  }
  return pattern
}

function emptyPatterns(count) {
  const patterns = []
  for(let i=0; i<count; i++) {
    patterns.push(emptyPattern())
  }
  return patterns
}
