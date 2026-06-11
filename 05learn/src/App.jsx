import { useCallback, useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [password, setPassword] = useState("");
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [symbolAllowed, setsymbolAllowed] = useState(false)

  const passwordRef= useRef(null)
  const copytoclipboard= useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuvwz"
    if(numberAllowed) str +="0123456789"
    if(symbolAllowed) str +="!@#$%^&*()}{?/~"
    for(let i=1; i<length; i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
  }, [length, password, numberAllowed, symbolAllowed, setPassword])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, symbolAllowed])

  return (
    <>
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-250 h-80 bg-gray-400 rounded-4xl">
        <div className="w-150 h-20 bg-white flex justify-center items-center ml-45 text-5xl font-semibold">Password Generator</div>
        <div className=" w-250 h-20 bg-pink-400 flex justify-center items-center">
          <input
          type="text"
          value={password}
          className="w-150 h-12 text-2xl outline-2xl px-2 py-2 bg-white rounded-lg"
          placeholder='password'
          ref={passwordRef}
          readOnly>
          </input>
          <button
          onClick={copytoclipboard}
          className="w-20 h-12 bg-blue-400 px-2 py-2 rounded-lg">Copy</button>
        </div>
        <div className="w-250 h-20 flex justify-center items-center bg-yellow-400 flex gap-5">
            <div>
              <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor"
          onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: {length}</label>
            </div>
            <div>
               <input
            type="checkbox"
            defaultChecked={numberAllowed}
            className="numberAllowed"
            onChange={() => {
              setnumberAllowed((prev) => (!prev));
            }}
            />
            <label htmlFor="numberAllowed">Numbers</label>
            </div>
            <div>
               <input
            type="checkbox"
            defaultChecked={symbolAllowed}
            className="symbolAllowed"
            onChange={() => {
              setsymbolAllowed((prev) => (!prev));
            }}
            />
            <label htmlFor="symbolAllowed">Symbol</label>
            </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
