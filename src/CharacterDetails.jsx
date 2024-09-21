import React, { useEffect, useState } from 'react';
import './CharacterDetails.css';

const characters = ['Pikachu', 'Bulbasaur', 'Gengar', 'Snorlax'];

function CharacterDetails() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const responses = await Promise.all(
        characters.map(character =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${character.toLowerCase()}`)
        )
      );
      const data = await Promise.all(responses.map(res => res.json()));
      setDetails(data);
    };
    fetchDetails();
  }, []);

  return (
    <div className="character-details">
      {details.map((character, index) => (
        <div key={index} className="character-card">
          <h2>{character.name}</h2>
          <img src={character.sprites.front_default} alt={character.name} />
        </div>
      ))}
    </div>
  );
}

export default CharacterDetails;