// events.js
// Añade o modifica los eventos al gusto
// Las imágenes deben estar en "public/"

export const events = [
  {
    id: 1,
    title: "Gaming Expo 2025",
    location: "New York",
    image: "eventos/1.jpg",
  },
  {
    id: 2,
    title: "Indie Game Developers Meetup",
    location: "San Francisco",
    image: "eventos/2.jpg",
  },
  {
    id: 3,
    title: "Esports Championship",
    location: "Los Angeles",
    image: "eventos/3.jpg",
  },
  {
    id: 4,
    title: "PlayStation Showcase",
    location: "Tokyo, Japón",
    image: "eventos/4.jpg",
  },
  {
    id: 5,
    title: "Nintendo Direct",
    location: "Kyoto, Japón",
    image: "eventos/5.jpg",
  },
  {
    id: 6,
    title: "Xbox Game Studios Reveal",
    location: "Seattle, USA",
    image: "eventos/6.jpg",
  },
  {
    id: 7,
    title: "Steam Indie Fest",
    location: "Londres, Reino Unido",
    image: "eventos/7.jpg",
  }
];

  
  // Simula una petición API que devuelve los eventos después de un pequeño retraso.
  export const fetchEvents = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(events);
      }, 500); // Simula un retraso de 500 milisegundos
    });
  };
  