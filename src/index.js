
import { useData,getSortData } from "./scripts/api";
import { renderSearchCards } from "./scripts/components/cards";
import { renderNavbar } from "./scripts/components/navbar";
import { renderSearchBar, handleSearch } from "./scripts/components/search";
import createChart from "./scripts/components/lineChart";


document.addEventListener("DOMContentLoaded", () => {
   const main = document.querySelector("#main");
  console.log("Hello world!");
  //npm run watch to run webpack
 renderNavbar()
 renderSearchBar()
 //render cards


 useData().then((allData)=>{
  //  renderSearchCards(allData.allData);
   handleSearch(allData.allData,main);
  console.log(allData)
  createChart(allData.allData)
  })
});


