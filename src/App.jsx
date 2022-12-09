import { useState } from 'react'
import useWindowDimensions from './useWindowDimensions'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const {height, width} = useWindowDimensions()

  const [color, setColor] = useState({
    r: 100,
    g: 0,
    b: 0,
    x: 0,
    y: 0,
  })

  const changeColorRandom  = () => {
    const newR = Math.random() * 100 
    const newG = Math.random() * 100
    const newB = Math.random() * 100


    setColor({
      r: newR,
      g: newG,
      b: newB,
      x: Math.random() * width,
      y: Math.random() * height
    })
  }

  

  return (
    <div style={{
      backgroundColor: `rgb(${color.r},${color.g},${color.b})`
    }} className="App">
      <button style={{
      backgroundColor: `rgb(${color.b},${color.g},${color.r})`,
      left: color.x,
      top: color.y,
      width: `${color.x / 5}vw`,
      height: `${color.y / 5}vh`,
    }} 
    onClick={changeColorRandom}>Change Color</button>
    </div>
  )
}

export default App
