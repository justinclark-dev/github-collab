import { useEffect, useState } from "react"
import getPlanets from "../../Services/FetchPlanets.js"
const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        const fetchPlanets = async () => {
            const planetsData = await getPlanets()
            console.log(await planetsData);
            console.log(await planetsData.results);

            setPlanets(planetsData.results)
        }
        fetchPlanets()
    }, [])

    return (
        <main>
            <h1>Planets</h1>
            <ul className="cards">
                {planets.map((planet, index) => (
                    <li key={index} className="card">
                        <h2>{planet.name}</h2>
                        <p>{planet.population}</p>
                        <p>{planet.terrain}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Planets