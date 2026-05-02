import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <h1>Student Record</h1>
      <h3>Student name: Gagan</h3>
      <h4>Class :B.tech</h4>
    </div>
  )
}

export default App
