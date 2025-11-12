import { useState, useEffect } from 'react'
import './App.css'

import Nav from "./components/Nav/Nav"
import Films from './components/Films/Films';
import Planets from './components/Planets/Planets'

function App() {
  
  return (
    <>
      <Nav />

      {/* <Films /> */}
      <Planets />
    </>
  )
}

export default App
