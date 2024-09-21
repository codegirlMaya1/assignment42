import React, { useState } from 'react';
import './BrowseCharacters.css';

function BrowseCharacters() {
  const [characters, setCharacters] = useState([]);

  const fetchAllCharacters = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    setCharacters(data.results);
  };

  return (
    <div className="browse-characters">
      <button onClick={fetchAllCharacters}>Fetch All Characters</button>
      <div className="character-list">
        {characters.map((character, index) => (
          <div key={index} className="character-item">
            <h3>{character.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseCharacters;