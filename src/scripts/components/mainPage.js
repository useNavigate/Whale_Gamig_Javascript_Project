import { createChart } from "./chart/lineChart";




export const renderMainPage = () => {
  const main = document.getElementById("main");
  main.innerHTML = `
 <div class="main_page_wrapper">
    <div class="_page">
        <h1>Level Up Your</h1>
        <h1> <span>Gaming</span> Knowledge</h1>
        <h1>Search, Discover and <span>Play</span></h1>

        <button id="game_button">Explore</button>
    </div>
    <div class="_page data">
        <h1>Get the <span>Edge</span></h1>
        <h1>with Our Comprehensive</h1>
        <h1> Gaming<span> Data</span> Analysis</h1>
        <button id="data_button">Explore</button>
    </div>
</div>

    `;
};

export function handlePage(allData) {
  ('handlepage')

  const main = document.querySelector("#main");
  const renderButton = document.querySelector("#game_button");
  renderButton.addEventListener("click", (event) => {
    event.preventDefault();
    ("button");
    main.innerHTML = "";
    main.classList.add("card_page");
    allData.forEach((game) => {

      const card = document.createElement("div");
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
 });



    });
  });


}

export function handleDataPage(allData, data) {
  const dataButton = document.querySelector("#data_button");
  const main = document.getElementById('main')
   main.classList.remove("card_page");
  dataButton.addEventListener("click", (event) => {
    event.preventDefault();
    main.innerHTML = "";
    ("databutton");
    // handleFilter(data)
    createChart(allData,data);
 main.classList.add("card_page");
    // createMultiChart(dispatchGenre(data));
  });
}
