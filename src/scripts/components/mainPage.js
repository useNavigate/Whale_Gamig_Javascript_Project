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
  ("handlepage");

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
          .then((data) => {
            console.log(data);
            main.innerHTML = "";
            const detail_section = document.createElement("div");
            detail_section.classList.add("d_main")

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
          })
          .catch((err) => console.error("error:" + err));
      });
    });
  });
}

export function handleDataPage(allData, data) {
  const dataButton = document.querySelector("#data_button");
  const main = document.getElementById("main");
  main.classList.remove("card_page");
  dataButton.addEventListener("click", (event) => {
    event.preventDefault();
    main.innerHTML = "";
    ("databutton");
    // handleFilter(data)
    createChart(allData, data);
    main.classList.add("card_page");
    // createMultiChart(dispatchGenre(data));
  });
}
