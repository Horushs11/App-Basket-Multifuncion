import { useState } from 'react'
import Inicio from './(tabs)/inicio';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Inicio />
  )
}

export default App
