import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const BASE_URL = `https://swapi.dev/api/`;
  // const [count, setCount] = useState(0)


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

    </>
  )
}

export default App
