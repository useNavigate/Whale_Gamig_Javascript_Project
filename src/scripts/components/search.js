export const renderSearchBar = () => {
  const menu = document.getElementById("menu");
  const search = document.createElement('li')
  // search.classList.add('search')
  search.setAttribute('id','search')
  menu.appendChild(search)
  search.innerHTML = `


  <input id ="searchInput" type="text">


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
    if (gameTitle[0] === searchInput[0] && gameTitle.includes(searchInput)) {
      // console.log(game);
      const card = document.createElement("div");
      card.innerHTML = `
      <div class = "card">
        <h1> result for ${searchTerm}
        <ul class="card_info">
          <li><h1>${game.title}</h1></li>
          <li>${game.genre}</li>
          <li>${game.short_description}</li>
          <li>${game.platform}<li>
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
