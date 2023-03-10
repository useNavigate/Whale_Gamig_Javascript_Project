export const renderSearchBar = () => {
  const navBar = document.getElementById("search");
  navBar.innerHTML = `
    <label>
  <input id ="searchInput" type="text"><button>search</button>
  </label>
    `;
};

export function handleSearch(games) {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    console.log(`searching : ${searchTerm}`);
    getSearchResult(games, searchTerm);
  });
}

function getSearchResult(games, searchTerm) {
  games.forEach((game) => {
    const gameTitle = game.title.toLowerCase();
    const searchInput = searchTerm.toLowerCase();
    if (gameTitle[0] === searchInput[0] && gameTitle.includes(searchInput)) {
      console.log(game);
    }
  });
}
