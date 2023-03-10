import Example from "./scripts/example";
import { useData } from "./scripts/api";
import { handleMainPage } from "./scripts/mainPage";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello world!");
  //npm run watch to run webpack

  //grab an html element for DOM manipulation
  const main = document.getElementById("main");
  //   new Example(main);
//  handleButtonClick(); can add all the eventlistner like this
  //need to make some html for navbar and search section so we can save it as variable to have handle events
  useData().then((data) => {

    console.log(data.allData[0].title)
    //i need to decide how i am going to render this
     handleMainPage(data.allData[0].title, main);
  });
});
