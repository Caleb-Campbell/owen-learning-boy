import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [color, setColor] = useState({
    r: 100,
    g: 0,
    b: 0,
    x: 0,
    y: 0
  })

  const changeColorRandom  = () => {
    const newR = Math.random() * 100 
    const newG = Math.random() * 100
    const newB = Math.random() * 100

    setColor({
      r: newR,
      g: newG,
      b: newB
    })
  }

  

  return (
    <div style={{
      backgroundColor: `rgb(${color.r},${color.g},${color.b})`
    }} className="App">
      <button style={{
      backgroundColor: `rgb(${color.b},${color.g},${color.r})`
    }} onClick={changeColorRandom}>Change Color</button>
    </div>
  )
}

export default App
