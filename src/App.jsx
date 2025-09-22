import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  return (
    <>
      <h1>Color Mixer</h1>

      <div>
        <label htmlFor="red">Red</label>
        <input type="range" name="" id="red" min={0} max={255} />
      </div>
      
      <div>
        <label htmlFor="green">Green</label>
        <input type="range" name="" id="green" min={0} max={255} />
      </div>

      <div>
        <label htmlFor="blue">Blue</label>
        <input type="range" name="" id="blue" min={0} max={255} />
      </div>
    </>
  )
}

export default App
