import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [red, setRed] = useState(0);
  let [green, setGreen] = useState(0);
  let [blue, setBlue] = useState(0);

  return (
    <>
      <h1>Color Mixer</h1>
      <div style={{backgroundColor:'rgb('+red+','+green+', '+blue+')', width:'200px', height: '200px'}}></div>
      <div>
        <label htmlFor="red">Red</label>
        <input type="range" value={red} onChange={(event)=>setRed(event.target.value)} name="" id="red" min={0} max={255} />
      </div>
      
      <div>
        <label htmlFor="green">Green</label>
        <input type="range" value={green} onChange={(event) => setGreen(event.target.value)} name="" id="green" min={0} max={255} />
      </div>

      <div>
        <label htmlFor="blue">Blue</label>
        <input type="range" value={blue} onChange={(event) => setBlue(event.target.value)} name="" id="blue" min={0} max={255} />
      </div>
    </>
  )
}

export default App
