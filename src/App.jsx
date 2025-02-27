import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GamesList from "./components/GamesList";
import EventsList from "./components/EventsList";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<GamesList />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
