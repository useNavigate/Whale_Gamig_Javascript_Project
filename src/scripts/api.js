const games = `https://mmo-games.p.rapidapi.com/games`;
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-RapidAPI-Key": "5baae6da7amsh6d563cbf11ac2a0p1d6d56jsn48853ab50d67",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  },
};

let allData = null;
let gamesByGenre = null;

export async function getAllData(url, options) {
  try {
    const response = await fetch(url, options);
    const games = await response.json();

    allData = games;

    //storing data by genre aka category why do they have to name query and key differently? -.-

    gamesByGenre = {};
    for (const game of allData) {
      const genre = game.genre;
      if (!gamesByGenre[genre]) {
        gamesByGenre[genre] = [];
      }
      gamesByGenre[genre].push(game);
    }
    /*
      this part is important because whole point of storing in to variable is to use it
      whenever i want to call it however, i might call the variable before it even get to store it
      so i need to make sure it returns it as variable but it still going to return 'promise' because it
      did not resolve yet it was undefined for LONG TIME LOL...
    */
    return {allData, gamesByGenre}; // it actually needs to return the promise value that has these data i want
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
  if (!allData || !gamesByGenre) {
    /* this is way to get out from call back hell and also we do not need to fetch EVERY SINGLE TIME*/
    await getAllData(games, options);
  }
  //save in array because i'd rather loop through array...
  // ok changing to object cuz actually i do forget which is which.. it is good to have key...
  const data = {allData, gamesByGenre};
  return data;
}

// //data[0]=>all the data
// //data[1]=> data saved by genre
// useData().then((data) => console.log(data[0], data[1]));
