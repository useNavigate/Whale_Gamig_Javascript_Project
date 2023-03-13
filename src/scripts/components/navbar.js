import { createChart } from "./chart/lineChart";
import { createMultiChart } from "./chart/genreCharts";
import { dispatchGenre } from "./chart/genreCharts";

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
    createChart(allData);
    createMultiChart(dispatchGenre(data));
  });

  gameMenu.addEventListener("click",event=>{
    event.preventDefault()
    main.innerHTML=""
 allData.forEach((game) => {
   const card = document.createElement("div");
   card.innerHTML = `
      <div class = "card">
      <ul class="card_info">
      <li><h1>${game.title}</h1></li>
      <li>${game.genre}</li>
      <li>${game.short_description}</li>
      <li>${game.platform}<li>
      </ul>
      </div>
      `;
   main.appendChild(card);
 })
  })
}
