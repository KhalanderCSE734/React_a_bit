import { useState } from 'react'
import './App.css'
import Pokemon from './Components/pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokemon/>
    </>
  )
}

export default App
