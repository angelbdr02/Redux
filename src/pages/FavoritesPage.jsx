import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../redux/slices/gamesSlice";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.games.favorites);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mis Juegos Favoritos</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.length > 0 ? (
          favorites.map(game => (
            <li key={game.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{game.name}</h3>
              <button 
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded-lg"
                onClick={() => dispatch(removeFavorite(game.id))}
              >
                ❌ Quitar
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No tienes juegos favoritos aún.</p>
        )}
      </ul>
    </div>
  );
};

export default FavoritesPage;
