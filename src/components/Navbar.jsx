import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container flex justify-between items-center py-3">
        <h1 className="text-lg font-semibold text-gray-800">🎮 Game Events</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="text-gray-700 hover:text-blue-500">Inicio</Link></li>
          <li><Link to="/events" className="text-gray-700 hover:text-blue-500">Eventos</Link></li>
          <li><Link to="/favorites" className="text-gray-700 hover:text-blue-500">Favoritos</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
