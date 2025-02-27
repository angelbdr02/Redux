export const fetchGames = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "The Legend of Zelda: Breath of the Wild", releaseDate: "2017-03-03" },
          { id: 2, name: "Elden Ring", releaseDate: "2022-02-25" },
          { id: 3, name: "God of War Ragnarök", releaseDate: "2022-11-09" },
          { id: 4, name: "Cyberpunk 2077", releaseDate: "2020-12-10" },
          { id: 5, name: "The Witcher 3: Wild Hunt", releaseDate: "2015-05-19" },
          { id: 6, name: "Super Mario Odyssey", releaseDate: "2017-10-27" },
          { id: 7, name: "Hollow Knight", releaseDate: "2017-02-24" },
          { id: 8, name: "Persona 5 Royal", releaseDate: "2019-10-31" },
          { id: 9, name: "Red Dead Redemption 2", releaseDate: "2018-10-26" },
          { id: 10, name: "Final Fantasy VII Remake", releaseDate: "2020-04-10" },
          { id: 11, name: "Resident Evil 4 Remake", releaseDate: "2023-03-24" },
          { id: 12, name: "Baldur's Gate 3", releaseDate: "2023-08-03" },
          { id: 13, name: "Starfield", releaseDate: "2023-09-06" },
          { id: 14, name: "Metroid Dread", releaseDate: "2021-10-08" },
          { id: 15, name: "Sekiro: Shadows Die Twice", releaseDate: "2019-03-22" }
        ]);
      }, 500);
    });
  };
  