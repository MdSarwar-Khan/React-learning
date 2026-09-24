import { useState } from 'react'
import '@/App.css'
import Navigation from '@/components/Navigation/Navigation'
import Contactheader from '@/components/Contactheader/Contactheader'

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
