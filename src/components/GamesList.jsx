import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGames, addFavorite } from "../redux/slices/gamesSlice";
import { fetchGames } from "../redux/services/service";

const GamesList = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.games.games);
  const favorites = useSelector(state => state.games.favorites);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetchGames().then(data => dispatch(setGames(data)));
  }, [dispatch]);

  const sortedGames = [...games].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "date") return new Date(b.releaseDate) - new Date(a.releaseDate);
    return 0;
  });

  return (
    <div className="container py-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Juegos</h2>

      <div className="mb-4 flex gap-4">
        <label className="text-gray-600">Ordenar por:</label>
        <select 
          className="border rounded px-3 py-1"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Nombre</option>
          <option value="date">Fecha de Lanzamiento</option>
        </select>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedGames.map(game => (
          <li key={game.id} className="card">
            <h3 className="text-lg font-semibold">{game.name}</h3>
            <p className="text-gray-600">Fecha: {game.releaseDate}</p>
            <img
            src={`/juegos/${game.id}.jpg`} // Usa la carpeta "public/juegos/"
            alt={game.name}
            className="w-full h-40 object-cover rounded-md shadow-md"
            />

            <button 
              className={`button mt-2 ${favorites.some(fav => fav.id === game.id) ? 'button-secondary' : 'button-primary'}`}
              onClick={() => dispatch(addFavorite(game))}
              disabled={favorites.some(fav => fav.id === game.id)}
            >
              ⭐ {favorites.some(fav => fav.id === game.id) ? "En Favoritos" : "Añadir"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesList;
