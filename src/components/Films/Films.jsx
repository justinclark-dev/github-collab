import { useEffect, useState } from "react";
import getFilms from "../../Services/FetchFilms.js"

const Films = () => {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const filmsData = await getFilms();
      console.log(await filmsData);
      console.log(await filmsData.results);
      setFilms(filmsData.results);
    };
    
    fetchFilms();
  }, []);

  return (
    <main>
      <h1>Films</h1>
      <ul className="cards">
        {films.map((film, index) => (
          <li key={index} className="card">
            <h2>{film.title}</h2>
            <p>{film.opening_crawl}</p>
          </li>
        ))}
      </ul>
    </main>
  )
};

export default Films;