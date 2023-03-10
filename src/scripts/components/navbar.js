export const renderNavbar = () => {

    const navBar = document.getElementById('navbar')
    navBar.innerHTML = `
    <a><h1>🐳WG</h1></a>
    <li>Games</li>
    <li>News</li>
    <li>Giveaways</li>
    <li><input type="text"><button>search<button></li>
    `;



};

// allData.forEach((data) => {
//   const gameLi = document.createElement("li");
//   gameLi.innerHTML = data.title;
//   gameUl.appendChild(gameLi);
//   div.appendChild(gameUl);
//   // div.innerText =`<h1>${data.title}<h1>`
// });
