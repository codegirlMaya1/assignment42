import React from 'react';
import './ComicPage.css';

const comicCharacters = ['Greninja', 'Dragonite', 'Jigglypuff', 'Arcanine'];

function ComicPage() {
  return (
    <div className="comic-page">
      {comicCharacters.map((character, index) => (
        <div key={index} className="comic-card">
          <h2>{character}</h2>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 658}.png`} alt={character} />
        </div>
      ))}
    </div>
  );
}

export default ComicPage;