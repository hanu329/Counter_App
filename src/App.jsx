import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Timer} from "./Timer.jsx"

function App() {
  const [count, setCount] = useState(0)

  const [show, setShow] = useState(true)

  return (
    <div className="App">
     
     {show? <Timer /> : ""}

    <button onClick={()=>{
      {show? setShow(false) : setShow(true)}
    }} >toggle</button>
    </div>
  )
}

export default App
