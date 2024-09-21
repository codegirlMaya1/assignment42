import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';
import BrowseCharacters from './BrowseCharacters';
import ComicPage from './ComicPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/browse">Browse Characters</Link>
          <Link to="/comics">Comics</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CharacterDetails />} />
          <Route path="/browse" element={<BrowseCharacters />} />
          <Route path="/comics" element={<ComicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;