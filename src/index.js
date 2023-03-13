import { useData } from "./scripts/api";
import { renderNavbar, handleNavbarClick } from "./scripts/components/navbar";
import { renderSearchBar, handleSearch } from "./scripts/components/search";
import { renderMainPage } from "./scripts/components/mainPage";
import { handlePage } from "./scripts/components/mainPage";
import { handleDataPage } from "./scripts/components/mainPage";
import { handleFilter } from "./scripts/components/chart/filter";


document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main");
  console.log("Hello world!");
  renderNavbar();
  renderSearchBar();
  renderMainPage()


  useData().then((allData) => {
    handleFilter(allData.gamesByGenre)
    handleSearch(allData.allData, main);
    handlePage(allData.allData)
    handleDataPage(allData.allData,allData.gamesByGenre)
    handleNavbarClick(allData.allData,allData.gamesByGenre)



  });
});
