
import { useData } from "./scripts/api";
import { renderSearchCards } from "./scripts/components/cards";
import { renderNavbar } from "./scripts/components/navbar";
import { renderSearchBar, handleSearch } from "./scripts/components/search";


document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello world!");
  //npm run watch to run webpack
 renderNavbar()
 renderSearchBar()
 //render cards
 useData().then((allData)=>{
   renderSearchCards(allData.allData);
   handleSearch(allData.allData);
  })


});


