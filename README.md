# 🐳Whale Gaming Javascript Project

Javascript Project based on live game API 🎮

# Live Link

> https://usenavigate.github.io/Whale_Gaming_Javascript_Project/

## Background

> Welcome to `Whale Gaming`, a gaming website that offers information and data visualization based on the MMOBomb API. This website aims to provide a user-friendly and informative platform for gamers and enthusiasts to explore and discover games based on different categories and genres.🐋.

## Functionality & MVPs

In `Whale Gaming` , users will be able to:

> - View data visualization
>   - Whale Gaming provides a visually appealing and interactive way of exploring the number of games released per year based on categories

> - Use the search functionality
>   - Users can search for their favorite games using our search bar

> - View game details
>   - Users can click on a game card to view its details such as description, gameplay, and more. This helps users to get a better understanding of the game before deciding to play or purchase it

## Wireframes

### Main Page

> ![image](gif/main_page.gif)

### Navigation

> ![image](gif/navigation.gif)

### Cards and Details

> ![image](gif/card.gif)

### Search and Details

> ![image](gif/search_bar.gif)

### Data Visualzation

> ![image](gif/stat.gif)

### index.js

> - Breaking down code into separate components is an efficient and organized approach that can improve code maintenance and facilitate code reuse

```javascript
import { useData } from "./scripts/api";
import { renderNavbar, handleNavbarClick } from "./scripts/components/navbar";
import { renderSearchBar, handleSearch } from "./scripts/components/search";
import {
  renderMainPage,
  handlePage,
  handleDataPage,
} from "./scripts/components/mainPage";
import { handleSubNavbar } from "./scripts/components/subNavbar";
import { renderPopup } from "./scripts/components/modal";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main");
  renderPopup();
  renderNavbar();
  renderSearchBar();
  renderMainPage();

  useData().then((allData) => {
    handleSearch(allData.allData, main);
    handlePage(allData.allData, allData.gamesByGenre);
    handleDataPage(allData.allData, allData.gamesByGenre);
    handleNavbarClick(allData.allData, allData.gamesByGenre);
    handleSubNavbar(allData.gamesByGenre);
  });
});

```

### api.js

> - Minimize inefficient fetch calls by retrieving the data once and restructuring it to suit my needs

```javascript
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
  } catch (err) {}
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
```

## Technologies, Libraries, APIs

> - `mmobomb-api` (https://www.mmobomb.com/api)
> - `d3.js` (https://d3js.org/)

## Implementation Timeline

### Friday

> - fetch all the API data
>   - store as a variable to reduce amount of unnecessary fetch calls
> - render basic html
>   - navbar / main page

### Saturday

> - Construct Data
>   - restructure the fetched data into a suitable format for data visualization, which enable accurate representation of trends and patterns in the gaming industry
> - Learn about d3 line graph
> - Parse data to csv

### Sunday

> - Render basic d3 line graph
> - Add tool tip for the graph

### Monday

> - DOM
>   - Added featured functionality eventlistners for
>     - Click ( navbar / main page / cards / filter)
>   - Input (search)
>     - improved the search functionality by implementing a delay in fetching results. the API won't be called immediately when the user types in the search bar, but rather after a brief pause in typing to reduce unnecessary API calls.

### Tuesday

> - Added favicon
> - CSS for Styling
> - linkes all the component by reconstructing DOM
> - Fixed minor bugs

### Wednesday

> - Testing
>   - finalize the website
> - Added github link

### Thursday

> - Added User's Guide
> - Update README.md
