import { useData } from "./scripts/api";
import { renderNavbar, handleNavbarClick } from "./scripts/components/navbar";
import { renderSearchBar, handleSearch } from "./scripts/components/search";
import {
  renderMainPage,
  handlePage,
  handleDataPage,
} from "./scripts/components/mainPage";
import { handleSubNavbar } from "./scripts/components/subNavbar";
import { renderPopup } from "./scripts/components/modal";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("#main");
  renderPopup();
  renderNavbar();
  renderSearchBar();
  renderMainPage();

  useData().then((allData) => {
    handleSearch(allData.allData, main);
    handlePage(allData.allData, allData.gamesByGenre);
    handleDataPage(allData.allData, allData.gamesByGenre);
    handleNavbarClick(allData.allData, allData.gamesByGenre);
    handleSubNavbar(allData.gamesByGenre);
  });
});
