const games = `https://mmo-games.p.rapidapi.com/games`;

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-RapidAPI-Key": "5baae6da7amsh6d563cbf11ac2a0p1d6d56jsn48853ab50d67",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  },
};

let allData = null;
let gamesByGenre = null;
let gamesByReleaseDate = null;


export async function getAllData(url, options) {
  try {
    const response = await fetch(url, options);
    const games = await response.json();
    allData = games;
    gamesByReleaseDate = {};
    for (const game of allData) {
      const release_date = game.release_date;
      if (!gamesByReleaseDate[release_date]) {
        gamesByReleaseDate[release_date] = [];
      }
      gamesByReleaseDate[release_date].push(game);
    }

    gamesByGenre = {};

    for (const game of allData) {
      const genre = game.genre;
      if (!gamesByGenre[genre]) {
        gamesByGenre[genre] = [];
      }
      gamesByGenre[genre].push(game);
    }

    return { allData, gamesByReleaseDate, gamesByGenre };
  } catch (err) {
  }
}

export async function useData() {
  if (!allData || !gamesByReleaseDate || !gamesByGenre) {
    await getAllData(games, options);
  }

  const data = {
    allData,
    gamesByReleaseDate,
    gamesByGenre,
  };
  return data;
}
