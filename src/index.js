import Example from "./scripts/example";
import { useData } from "./scripts/api";
import { handleMainPage } from "./scripts/mainPage";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello world!");
  //npm run watch to run webpack

  //grab an html element for DOM manipulation
  const main = document.getElementById("main");
  //   new Example(main);

  useData().then((data) => {
    console.log(data.allData[0].title)
    //i need to decide how i am going to render this
     handleMainPage(data.allData[0].title, main);
  });
});
