import { useState, useEffect } from 'react'
import './App.css'

import Nav from "./components/Nav/Nav"
import Films from './components/Films/Films';

function App() {
  
  return (
    <>
      <Nav />

      <Films />
    </>
  )
}

export default App
