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
    </div>
  );
}

export default App;
