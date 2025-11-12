import { useState, useEffect } from 'react'
import './App.css'

import Nav from "./components/Nav/Nav"
import Films from './components/Films/Films';
import Planets from './components/Planets/Planets'
import Species from './components/Species/Species';

function App() {
  
  return (
    <>
      <Nav />

      {/* <Films /> */}
      {/* <Planets /> */}
      <Species/>
    </>
  )
}

export default App
