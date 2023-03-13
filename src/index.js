import { useData } from "./scripts/api";
import { renderNavbar, handleNavbarClick } from "./scripts/components/navbar";
import { renderSearchBar, handleSearch } from "./scripts/components/search";
import { renderMainPage } from "./scripts/components/mainPage";
import { handlePage } from "./scripts/components/mainPage";
import { handleDataPage } from "./scripts/components/mainPage";
import { handleLinearNavbar } from "./scripts/components/chart/linearChart";


document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main");
  console.log("Hello world!");
  renderNavbar();
  renderSearchBar();
  renderMainPage()


  useData().then((allData) => {
    handleLinearNavbar(allData.gamesByGenre)
    handleSearch(allData.allData, main);
    handlePage(allData.allData)
    handleDataPage(allData.allData,allData.gamesByGenre)
    handleNavbarClick(allData.allData,allData.gamesByGenre)



  });
});
