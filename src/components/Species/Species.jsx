import { useEffect, useState } from "react"
import getSpecies from "../../Services/FetchSpecies.js"
const Species = () => {

    const [species, setSpecies] = useState([])


    useEffect(() => {
        const FetchSpecies = async () => {
            const speciesData = await getSpecies()
            console.log(await speciesData)
            console.log(await speciesData.results)

            setSpecies(speciesData.results)
        }


        FetchSpecies()
    }, [])

    return (
        <main>
            <h1>Species</h1>
            <ul className="cards">
                {species.map((species, index) => (
                    <li key={index} className="card">
                        <h2>{species.name}</h2>
                        <p>{species.classification}</p>
                        <p>{species.average_lifespan}</p>
                        <p>{species.language}</p>
                    </li>

                ))}
            </ul>
        </main>









    )




}

export default Species

