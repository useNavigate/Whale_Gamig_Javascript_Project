import { useData } from "./scripts/api";
import { renderNavbar, handleNavbarClick } from "./scripts/components/navbar";
import { renderSearchBar, handleSearch } from "./scripts/components/search";
import { renderMainPage } from "./scripts/components/mainPage";
import { handlePage } from "./scripts/components/mainPage";
import { handleDataPage } from "./scripts/components/mainPage";
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main");
  console.log("Hello world!");
  //npm run watch to run webpack
  renderNavbar();
  renderSearchBar();
  renderMainPage()
  //render cards

  useData().then((allData) => {
    //  renderSearchCards(allData.allData);
    handleSearch(allData.allData, main);
    handlePage(allData.allData)
    handleDataPage(allData.allData,allData.gamesByGenre)
    handleNavbarClick(allData.allData,allData.gamesByGenre)
    console.log(allData.allData[0].title);
    // createChart(allData.allData);
    // createMultiChart(dispatchGenre(allData.gamesByGenre));
  });
});
