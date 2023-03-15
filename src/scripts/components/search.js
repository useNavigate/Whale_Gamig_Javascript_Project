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
          let id = game.id
          console.log(game.id)
      // (game);

//       const card = document.createElement("div");
//       card.innerHTML = `
// <div class="card" style="background-image: url('${game.thumbnail}'); background-size: cover;">
//       <ul class="card_info">
//       <li><h1 id ="game_title">${game.title}</h1></li>
//       <li class="genre">${game.genre}</li>
//       <li class="description">${game.short_description}</li>
//       </ul>
//       </div>
//       `;
 fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`, {
   method: "GET",
   headers: {
     "X-RapidAPI-Key": "5baae6da7amsh6d563cbf11ac2a0p1d6d56jsn48853ab50d67",
     "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
   },
 })
   .then((res) => res.json())
   .then((data) => {
     console.log(data);
     main.innerHTML = "";
     const detail_section = document.createElement("div");
     detail_section.classList.add("d_main");
     detail_section.innerHTML = `

  <div class="d_pictures">
  <h1>${data.title}</h1>
   <div class="d_thumbnail"  style="background-image: url('${data.thumbnail}'); background-size: cover;"></div>
      <div class="d_information">

      <ul class="d_sub">
        <li><h4>Title</h4></li>
        <li>${data.title}</li>
        <li><h4>Release Date</h4></li>
        <li>${data.release_date}</li>
        <li><h4>Developer</h4></li>
        <li>${data.developer}</li>
        <li><h4>Genre</h4></li>
        <li>${data.genre}</li>
        <li><h4>Publisher</h4></li>
        <li>${data.publisher}</li>
        <li><h4>Platform</h4></li>
        <li>${data.platform}</li>
      </ul>
    </div>
  </div>
  <div class="d_details">
      <div class="d_screenshot">

    <img src="${data.screenshots[0].image}" alt="${data.title} screenshot">
     <img src="${data.screenshots[1].image}" alt="${data.title} screenshot">
      <img src="${data.screenshots[2].image}" alt="${data.title} screenshot">
    </div>

    <div class="d_bar">
   <h1>Description</h1>
   </div>
    <div class="d_description">${data.description}   <a id="play" href=${data.game_url}>Play Now</a> </div>



  </div>

            `;
     main.appendChild(detail_section);
   });
    } //else{
    //   main.innerHTML = "";
    //   main.innerHTML = "can't find it ";
    // }
  });
}
