import { useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation/Navigation.jsx"
import Contactheader from "./components/Contactheader/Contactheader.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />   
      <Contactheader /> 
    </>
  )
}

export default App
