import { createChart } from "./chart/lineChart";
import { createMultiChart } from "./chart/genreCharts";
import { dispatchGenre } from "./chart/genreCharts";
export const renderMainPage = () => {
  const main = document.getElementById("main");
  main.innerHTML = `
 <div class="main_page_wrapper">
    <div class="_page">
        <h1>Games</h1>
        <button id="game_button">Explore</button>
    </div>
    <div class="_page data">
        <h1>Data visualzation</h1>
        <button id="data_button">Explore</button>
    </div>
</div>

    `;
};

export function handlePage(allData) {
  const main = document.querySelector("#main");
  const renderButton = document.querySelector("#game_button");
  renderButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button");
    main.innerHTML = "";
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
    });
  });

}


export function handleDataPage(allData,data){
    const dataButton = document.querySelector("#data_button");
    dataButton.addEventListener("click", (event) => {
      event.preventDefault();
      main.innerHTML = "";
      console.log("databutton");
      createChart(allData);
      createMultiChart(dispatchGenre(data));
    });
}
