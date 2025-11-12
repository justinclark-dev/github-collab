import { useEffect, useState } from "react";
import getPeople from "../../Services/FetchPeople.js";

const People = () => {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const peopleData = await getPeople();
      console.log(await peopleData);
      console.log(await peopleData.results);
      setPeople(peopleData.results);
    };
    
    fetchPeople();
  }, []);

  return (
    <main>
      <h1>People</h1>
      <ul className="cards">
        {people.map((person, index) => (
          <li key={index} className="card">
            <h2>{person.name}</h2>
            <p>{person.opening_crawl}</p>
            <p>{person.gender}</p>
            <p>{person.birth_year}</p>
          </li>
        ))}
      </ul>
    </main>
  );

};

export default People;