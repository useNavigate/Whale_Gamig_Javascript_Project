import { createChart } from "./chart/lineChart";
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
export const renderNavbar = () => {

    const navBar = document.getElementById('menu')
    navBar.innerHTML = `
    <li id="home"><a href="https://usenavigate.github.io/Whale_Gaming_Javascript_Project/">Home</a></li>
    <li id="game_menu">Games</li>
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
        main.style.backgroundColor = "#0a1929";
    main.innerHTML=""
       main.classList.add("cards");
 allData.forEach((game) => {
   const card = document.createElement("div");
   main.classList.add('card_page')
   //rendering cards
  card.innerHTML = `
<div class="card" style="background-image: url('${game.thumbnail}'); background-size: cover;">
      <ul  class="card_info">
      <li><h1 id ="game_title">${game.title}</h1></li>
      <li class="genre">${game.genre}</li>

      <button id="${game.id}" class="more">Learn More</button>
      </ul>
      </div>
      `;
  main.appendChild(card);
scrollToTop();
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
             detail_section.classList.add("d_main");
               main.style.backgroundColor = "#132f4c";
               const image = data.screenshots.length !==0 ?[
                 data.screenshots[0].image,
                 data.screenshots[1].image,
                 data.screenshots[2].image,
               ] : "Screenshot Unavailable ";
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

    <img src="${image[0]}" alt="${data.title} screenshot">
     <img src="${image[1]}" alt="${data.title} screenshot">
      <img src="${image[2]}" alt="${data.title} screenshot">
    </div>

    <div class="d_bar">
   <h1>Description</h1>
   </div>
    <div class="d_description">${data.description}   <a id="play" href=${data.game_url}>Play Now</a> </div>



  </div>

            `;
            main.appendChild(detail_section)
            scrollToTop()

          })
          .catch((err) => console.error("error:" + err));
      });

 })
  })
}
