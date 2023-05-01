import { scrollToTop } from "./navbar";



export const handleSubNavbar = (genres) => {
  const genreForFilter = [];

  Object.keys(genres).forEach((keys) => {
    if (keys !== " MMORPG") {
      genreForFilter.push(keys);
    }
  });



  const submenu = document.querySelector("#submenu");
  genreForFilter.forEach((genre) => {
    const li = document.createElement("li");
    li.innerHTML = `${genre}`;
    li.setAttribute("id", genre);
    submenu.appendChild(li);

    li.addEventListener("click", (event) => {
      event.preventDefault();
      main.style.backgroundColor = "#0a1929";
      main.innerHTML = "";
      main.classList.add("cards");

      let games = genres[event.target.id];
      games.forEach((game) => {
        const card = document.createElement("div");
        main.classList.add("card_page");
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
        //buttons
        const button = document.getElementById(game.id);
        button.addEventListener("click", (event) => {

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

              main.innerHTML = "";
              const detail_section = document.createElement("div");
              detail_section.classList.add("d_main");
              main.style.backgroundColor = "#132f4c";
              console.log(data.screenshots)
               const image =
                 data.screenshots.length !== 0
                   ? [data.screenshots[0].image]
                   : ["https://via.placeholder.com/640x360?text=No+image+available"];




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
    </div>

    <div class="d_bar">
   <h1>Description</h1>
   </div>
    <div class="d_description">${data.description}   <a id="play" href=${data.game_url}>Play Now</a> </div>



  </div>

            `;
              main.appendChild(detail_section);
              scrollToTop();
            })
            .catch((err) => console.error("error:" + err));
        });
      });
    });
  });
};
