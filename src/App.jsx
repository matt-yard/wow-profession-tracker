import React, { useEffect, useState } from 'react';
import { Home } from './components/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import { fetchProfessions, fetchRealms } from '../util/apiFunctions.js';
import './App.css';

function App() {
  const [professions, setProfessions] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState({});
  const [realms, setRealms] = useState([]);
  const [selectedRealm, setSelectedRealm] = useState({});

  useEffect(() => {
    const initialLoad = async () => {
      const professions = await fetchProfessions();

      setProfessions(professions);
      const realms = await fetchRealms();
      setRealms(realms);
    };
    if (!professions.length) {
      initialLoad();
    }
  }, []);
  return (
    <div className="app">
      <div className="home-container">
        <h1>WoW Profit Calculator</h1>
        <p>
          Choose your profession and realm to find the most profitable* items to
          craft!
        </p>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                professions={professions}
                setSelectedProfession={setSelectedProfession}
                selectedProfession={selectedProfession}
                realms={realms}
                setSelectedRealm={setSelectedRealm}
                selectedRealm={selectedRealm}
              />
            }
          />
        </Routes>
        <p id="disclaimer">
          <em>
            Note: The strategy used for calculating profit is based off of
            buying raw materials at market price, and crafting them into items
            to resell on the Auction House. Auction House prices are updated
            every hour, so they may not be 100% accurate.
          </em>
        </p>
      </div>
    </div>
  );
}

export default App;
