import { useState, useEffect } from 'react'
import './App.css'

import Nav from "./components/Nav/Nav"
import Films from './components/Films/Films';
import Planets from './components/Planets/Planets'

function App() {

  const [currentPage, setCurrentPage] = useState("films")

  const handlePageNavigation = async (newPage) => {
    setCurrentPage(newPage)
  }
  
  return (
    <>
      <Nav handlePageNavigation={handlePageNavigation} />
      { currentPage === "films" && <Films /> }
      {/* { currentPage === "people" && <People /> }
      { currentPage === "species" && <Species /> } */}
      { currentPage === "planets" && <Planets /> }
    </>
  )
}

export default App
