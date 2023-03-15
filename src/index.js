import { useData } from "./scripts/api";
import { renderNavbar, handleNavbarClick } from "./scripts/components/navbar";
import { renderSearchBar, handleSearch } from "./scripts/components/search";
import { renderMainPage } from "./scripts/components/mainPage";
import { handlePage } from "./scripts/components/mainPage";
import { handleDataPage } from "./scripts/components/mainPage";
import { handleSubNavbar } from "./scripts/components/subNavbar";




document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main");

  renderNavbar();
  renderSearchBar();
  renderMainPage();



  useData().then((allData) => {
    console.log(allData.allData)
    handleSearch(allData.allData, main);
    handlePage(allData.allData,allData.gamesByGenre)
    handleDataPage(allData.allData,allData.gamesByGenre)
    handleNavbarClick(allData.allData,allData.gamesByGenre)
    handleSubNavbar(allData.gamesByGenre)




  });
});
