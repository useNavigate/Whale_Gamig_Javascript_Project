export const renderSearchBar = () => {
  const menu = document.getElementById("menu");
  const search = document.createElement("li");
  // search.classList.add('search')
  search.setAttribute("id", "search");
  menu.appendChild(search);
  search.innerHTML = `


  <input id ="searchInput" type="text" placeholder="search">



    `;
};

export function handleSearch(games, main) {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (event) => {
    event.preventDefault();
    const searchTerm = event.target.value;
    if (searchTerm.length > 3) {
      getSearchResult(games, searchTerm, main);
    } else {
      main.innerHTML = "";
    }
  });
}

function getSearchResult(games, searchTerm, main) {
  games.forEach((game) => {
    const gameTitle = game.title.toLowerCase();
    const searchInput = searchTerm.toLowerCase();
    // if (gameTitle[0] === searchInput[0] && gameTitle.includes(searchInput)) {
         if (gameTitle[0] === searchInput[0] && gameTitle.includes(searchInput)) {
      // console.log(game);
      main.classList.remove("card_page")
      const card = document.createElement("div");
      card.innerHTML = `
<div class="card" style="background-image: url('${game.thumbnail}'); background-size: cover;">
      <ul class="card_info">
      <li><h1 id ="game_title">${game.title}</h1></li>
      <li class="genre">${game.genre}</li>
      <li class="description">${game.short_description}</li>
      </ul>
      </div>
      `;
      main.innerHTML = "";
      main.appendChild(card);
    } //else{
    //   main.innerHTML = "";
    //   main.innerHTML = "can't find it ";
    // }
  });
}
