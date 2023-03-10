
/*cards to display search result
  this function only display brief information
*/
export const renderSearchCards = (allData) => {
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
      </ul>
      </div>
      `;
    main.appendChild(card);
  });
};

