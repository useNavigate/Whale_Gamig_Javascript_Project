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
// let gamesByPlatform = null;
// let gamesByPublisher = null;
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

    gamesByGenre={}

    for (const game of allData) {
      const genre = game.genre;
      if (!gamesByGenre[genre]) {
        gamesByGenre[genre] = [];
      }
      gamesByGenre[genre].push(game);
    }

    return { allData, gamesByReleaseDate, gamesByGenre }; // it actually needs to return the promise value that has these data i want
  } catch (err) {
    console.error("error:" + err);
  }
}

/*
  this function returns data so i don't have to fetch every single time
  this will only fetch if data is not there also it helps me to get out from call back
  & chain hell that i was stuck for long time... 😭

  and exporting this because exporting allData and gamesByGenre are useless... it still going to be undefined and its 'promise value'
  so its better to export this function that actually returns the data i need
*/
export async function useData() {

  if (!allData || !gamesByReleaseDate || !gamesByGenres) {
    /* this is way to get out from call back hell and also we do not need to fetch EVERY SINGLE TIME*/
    await getAllData(games, options);
  }

  const data = {
    allData,
    gamesByReleaseDate,
gamesByGenre
  };
  return data;
}



