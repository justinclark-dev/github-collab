import { useState, useEffect } from 'react'
import './App.css'

import Nav from "./components/Nav/Nav"

function App() {
  const BASE_URL = `https://swapi.dev/api/`;

    useEffect(() => {
    const getData = async () => {
      let response = await fetch(BASE_URL + `starships/`)
      let JSONdata = await response.json()

      console.log(JSONdata)
    }

    getData()

  }, []);

  return (
    <>
      <Nav />
    </>
  )
}

export default App
