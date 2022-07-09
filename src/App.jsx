import React, {useEffect, useState} from "react"
import {Home} from "./components/Home.jsx"
import {Routes, Route} from "react-router-dom"
import {fetchProfessions} from "../util/apiFunctions.js"
import "./App.css"

function App() {
  const [professions, setProfessions] = useState([])

  useEffect(() => {
    const initialLoad = async () => {
      const result = await fetchProfessions()
      console.log(result)
      setProfessions(result.professions)
    }
    initialLoad()
  }, [])
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home professions={professions} />} />
      </Routes>
    </div>
  );
}

export default App;
