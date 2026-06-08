import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setcounter]=useState(15)
  const addvalue = () => {
    console.log(counter);
    counter=counter+1;
    setcounter=(counter);
  }
  const removevalue = () => {
    counter=counter-1;
    setcounter=(counter-1);
    console.log(counter);
  }
  return (
    <>
      <h1>Whats your mobile Number</h1>
      <h2>Your house or mine</h2>
      <button
        onClick={addvalue}
        >
        Add value{counter}
      </button>
      <br/>
      <button
      onClick={removevalue}
      >
      Remove value{counter}
      </button>
    </>
  )
}

export default App
