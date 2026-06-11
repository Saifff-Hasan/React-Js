import { useState } from 'react'

function App() {
  const [color, setcolor]=useState("Olive")

  return (
    
    <div className="w-full h-screen flex justify-center items-center "
    style={{backgroundColor: color}}>
      <div className="
      flex justify-evenly items-center w-120 bg-white h-20 rounded-2xl mt-140"
      >
        <button
        onClick={() => setcolor("red")}
        className="h-16 w-16 bg-red-800 rounded-4xl"></button>
        <button
        onClick={() => setcolor("blue")}
        className="h-16 w-16 bg-blue-400 rounded-4xl"></button>
        <button
        onClick={() => setcolor("green")}
        className="h-16 w-16 bg-green-400 rounded-4xl"></button>
        <button
        onClick={() => setcolor("yellow")}
        className="h-16 w-16 bg-yellow-400 rounded-4xl"></button>
        <button
        onClick={() => setcolor("pink")}
        className="h-16 w-16 bg-pink-400 rounded-4xl"></button>
      </div>
    </div>
  )
}

export default App
