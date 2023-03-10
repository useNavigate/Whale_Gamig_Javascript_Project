export const renderMainPage = (allData) => {
  const main = document.querySelector("#main");
  allData.forEach((game) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class = "card">
      <ul class="card_info">
      <li><h1>${game.title}</h1></li>
      <li>${game.genre}</li>
      <li>${game.short_description}</li>
      <li>${game.platform}<li>
      </div>
      </div>
      `;
    main.appendChild(card);
  });
};

// export const renderMainPage=(allData,div)=>{
//     const gameUl = document.createElement('ul')
//     allData.forEach((data)=>{
//            const gameLi = document.createElement("li");
//            gameLi.innerHTML = data.title
//            gameUl.appendChild(gameLi)
//            div.appendChild(gameUl)
//         // div.innerText =`<h1>${data.title}<h1>`

//     })
// }
