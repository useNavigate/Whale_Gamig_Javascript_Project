import { createChart } from "./chart/lineChart";

export const renderNavbar = () => {

    const navBar = document.getElementById('menu')
    navBar.innerHTML = `
    <li><a href="https://usenavigate.github.io/Whale_Gaming_Javascript_Project/"><h1>🐳🐋</h1></a></li>
    <li id="game_menu">Games</li>
    <li id="profile_menu">Profile</li>
    <li id="stat_menu">Statistics</li>
    `;


};

export function handleNavbarClick(allData, data) {
  const gameMenu = document.querySelector("#game_menu");
  const statMenu = document.querySelector("#stat_menu")
  statMenu.addEventListener("click", (event) => {
    event.preventDefault();
    main.innerHTML = "";
    // handleFilter(data);
    createChart(allData,data);

    // createMultiChart(dispatchGenre(data));
  });

  gameMenu.addEventListener("click",event=>{
    event.preventDefault()
    main.innerHTML=""
       main.classList.add("cards");
 allData.forEach((game) => {
   const card = document.createElement("div");
   main.classList.add('card_page')
  card.innerHTML = `
<div class="card" style="background-image: url('${game.thumbnail}'); background-size: cover;">
      <ul  class="card_info">
      <li><h1 id ="game_title">${game.title}</h1></li>
      <li class="genre">${game.genre}</li>
      <li class="description">${game.short_description}</li>
      <button id="${game.id}" class="more">Learn More</button>
      </ul>
      </div>
      `;
  main.appendChild(card);

      const button = document.getElementById(game.id);
      button.addEventListener("click", (event) => {
        console.log(event.target.id);
        /// now it needs to fetch the data based on the id
        fetch(`https://mmo-games.p.rapidapi.com/game?id=${event.target.id}`, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "5baae6da7amsh6d563cbf11ac2a0p1d6d56jsn48853ab50d67",
            "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
          },
        })
          .then((res) => res.json())
          .then((data) => {console.log(data)
            main.innerHTML=""
            const detail_section = document.createElement("div")
            detail_section.innerHTML=`<h1>${data.title}</h1>`
            main.appendChild(detail_section)


          })
          .catch((err) => console.error("error:" + err));
      });

 })
  })
}
